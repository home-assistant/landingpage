package main

import (
	"crypto/rand"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net"
	"net/http"
	"time"

	"github.com/libp2p/zeroconf/v2"
)

// serviceInstance is the user-visible service instance name. Mirrors Core's
// default location_name so the entry reads as "Home" in client onboarding UIs.
const serviceInstance = "Home"

// mdnsPort is the port advertised in the SRV record and embedded in the
// TXT internal_url / base_url values. Kept as its own constant (rather than
// shared with main.go's HTTP listen port) because the planned move to port
// 80 may leave the landing page listening on multiple HTTP ports, in which
// case only one of them is the right one to advertise via mDNS.
const mdnsPort = 8123

// supervisorRetryInterval is both the sleep between Supervisor poll attempts
// and the per-request HTTP timeout. Using one constant for both makes the
// retry loop iterate on schedule even if a request stalls — the next poll
// fires within roughly 2× this interval.
const supervisorRetryInterval = 5 * time.Second

type Response struct {
	Result  string         `json:"result"`
	Message string         `json:"message,omitempty"`
	Data    map[string]any `json:"data,omitempty"`
}

func publishHomeAssistant() {
	var (
		err           error
		outboundIP    net.IP
		outboundIface string
	)

	for {
		outboundIP, outboundIface, err = getOutboundInfo()
		if outboundIP != nil && outboundIface != "" {
			break
		}
		log.Printf("Failed to get default interface info, retrying in %s: %s", supervisorRetryInterval, err)
		time.Sleep(supervisorRetryInterval)
	}

	iface, err := net.InterfaceByName(outboundIface)
	if err != nil {
		log.Printf("Interface %q not found: %s; skipping mDNS", outboundIface, err)
		return
	}

	instanceID, err := generateInstanceID()
	if err != nil {
		log.Printf("Cannot generate instance ID: %s; skipping mDNS", err)
		return
	}

	hostURL := fmt.Sprintf("http://%s:%d", outboundIP.String(), mdnsPort)
	txt := []string{
		"location_name=" + serviceInstance,
		"uuid=" + instanceID,
		"version=0000.0.0",
		"external_url=",
		"internal_url=" + hostURL,
		"base_url=" + hostURL,
		"landingpage=True",
	}

	log.Printf("Publish %s to _home-assistant._tcp as %s.local on %s", hostURL, instanceID, iface.Name)
	// Pass nil for the IPs so libp2p/zeroconf enumerates A *and* AAAA
	// records from the interface (its appendAddrs() falls back to the
	// iface only when both AddrIPv4 and AddrIPv6 are empty). Passing an
	// explicit IPv4 here would publish that single A and zero AAAAs,
	// which is what we accidentally did and the wire trace confirmed.
	server, err := zeroconf.RegisterProxy(
		serviceInstance,
		"_home-assistant._tcp",
		"local.",
		mdnsPort,
		instanceID,
		nil,
		txt,
		[]net.Interface{*iface},
	)
	if err != nil {
		log.Printf("Failed to start mDNS: %s", err)
		return
	}
	mdns.Store(server)
}

// generateInstanceID returns a 32-char hex string (128 bits of randomness),
// used as the SRV target hostname (<id>.local). Matches Core's UUID-shaped
// hostname pattern so the SRV target is unique across HA installs on the LAN
// and does not collide with systemd-resolved's homeassistant.local claim.
func generateInstanceID() (string, error) {
	b := make([]byte, 16)
	if _, err := rand.Read(b); err != nil {
		return "", err
	}
	return hex.EncodeToString(b), nil
}

// Get the first IPv4 address from the interface information
func getFirstIPv4Address(iface map[string]any) (net.IP, error) {
	ipv4Data, ok := iface["ipv4"].(map[string]any)
	if !ok {
		return nil, fmt.Errorf("no ipv4 addresses found")
	}

	addresses, ok := ipv4Data["address"].([]any)
	if !ok || len(addresses) == 0 {
		return nil, fmt.Errorf("empty ipv4 address list")
	}

	addr, ok := addresses[0].(string)
	if !ok {
		return nil, fmt.Errorf("can't parse first ipv4 address")
	}

	ip, _, err := net.ParseCIDR(addr)

	if err != nil {
		return nil, fmt.Errorf("invalid IPv4 address: %s", err)
	}

	return ip, nil
}

// Get IP address and interface name of the default interface from Supervisor
func getOutboundInfo() (net.IP, string, error) {
	supervisorHost := getSupervisorHost()

	// Same value as the retry sleep: a stalled request gives up in time
	// for the next loop iteration to fire on schedule.
	client := &http.Client{Timeout: supervisorRetryInterval}
	req, err := http.NewRequest("GET", "http://"+supervisorHost+"/network/interface/default/info", nil)

	if err != nil {
		return nil, "", fmt.Errorf("can't create request to Supervisor: %s", err)
	}

	setSupervisorAuthHeader(req)

	response, err := client.Do(req)
	if err == nil {
		defer response.Body.Close()
	}

	if err != nil || response.StatusCode >= 300 {
		var errorMsg string

		if err == nil {
			if data, err := io.ReadAll(response.Body); err == nil {
				errorMsg = string(data)
			} else {
				errorMsg = err.Error()
			}
		} else {
			errorMsg = err.Error()
		}

		return nil, "", fmt.Errorf("can't get default interface from Supervisor: %s", errorMsg)
	}

	var responseData Response

	if err := json.NewDecoder(response.Body).Decode(&responseData); err != nil {
		return nil, "", fmt.Errorf("can't parse default interface data: %s", err)
	}

	ifaceName, ok := responseData.Data["interface"].(string)
	if !ok || ifaceName == "" {
		return nil, "", fmt.Errorf("missing interface name in Supervisor response")
	}

	ipv4Addr, err := getFirstIPv4Address(responseData.Data)
	if err != nil {
		return nil, "", err
	}

	return ipv4Addr, ifaceName, nil
}
