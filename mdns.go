package main

import (
	"context"
	"crypto/rand"
	"encoding/hex"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"log"
	"net"
	"net/http"
	"time"

	"github.com/brutella/dnssd"
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

func publishHomeAssistant(ctx context.Context) {
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

	instanceID, err := generateInstanceID()
	if err != nil {
		log.Printf("Cannot generate instance ID: %s; skipping mDNS", err)
		return
	}

	hostURL := fmt.Sprintf("http://%s:%d", outboundIP.String(), mdnsPort)
	cfg := dnssd.Config{
		Name:   serviceInstance,
		Type:   "_home-assistant._tcp",
		Domain: "local",
		// Host is used as the SRV target hostname (<Host>.local). Using a
		// random 128-bit hex value keeps it unique across HA installs on the
		// LAN and avoids colliding with systemd-resolved's homeassistant.local
		// claim on the same host.
		Host:   instanceID,
		Port:   mdnsPort,
		// Restrict to the outbound interface reported by Supervisor so the
		// announce only goes out on the LAN-facing iface, and the A/AAAA RRset
		// only contains addresses bound to that iface (not docker-bridge
		// gateways or unrelated veth link-locals). brutella resolves the name
		// to *net.Interface internally and derives A and AAAA records from
		// iface.Addrs().
		Ifaces: []string{outboundIface},
		Text: map[string]string{
			"location_name": serviceInstance,
			"uuid":          instanceID,
			// The landing page runs before Core is installed, so there is no
			// real Core version to advertise. Older companion apps parse the
			// version and reject the record if it doesn't look like a valid
			// Core version, so we advertise the sentinel "0000.0.0" on
			// purpose: it satisfies those apps without pretending to be a
			// real release. The Android app stopped requiring a version
			// after 2026.6.2 (see home-assistant/android#6970); iOS still
			// requires it, tracked in home-assistant/iOS#4712.
			"version":      "0000.0.0",
			"external_url": "",
			"internal_url": hostURL,
			"base_url":     hostURL,
			"landingpage":  "True",
		},
	}

	sv, err := dnssd.NewService(cfg)
	if err != nil {
		log.Printf("Failed to build mDNS service: %s", err)
		return
	}

	// Probe up-front (RFC 6762 §8.1) so we know the final service instance
	// name *before* announcing. brutella renames on conflict with "Name (N)"
	// style — not identical to Core's "-N" but functionally equivalent and
	// good enough; we lean on the unusual default name (see serviceInstance)
	// to make actual collisions vanishingly rare. Respond() will re-probe
	// internally; that second probe sees no conflict and completes
	// immediately.
	probed, err := dnssd.ProbeService(ctx, sv)
	if err != nil {
		if !errors.Is(err, context.Canceled) {
			log.Printf("mDNS probing failed: %s", err)
		}
		return
	}
	if probed.Name != sv.Name {
		log.Printf("Service name %q already in use, renamed to %q", sv.Name, probed.Name)
	}

	rp, err := dnssd.NewResponder()
	if err != nil {
		log.Printf("Failed to create mDNS responder: %s", err)
		return
	}

	if _, err := rp.Add(probed); err != nil {
		log.Printf("Failed to add mDNS service: %s", err)
		return
	}

	log.Printf("Announcing %s on %s as %s (target %s.local)", hostURL, outboundIface, probed.ServiceInstanceName(), instanceID)
	// Respond blocks until ctx is cancelled. On cancellation it sends the
	// RFC 6762 §10.1 goodbye (TTL=0 PTR) on every interface the service is
	// bound to and then returns.
	if err := rp.Respond(ctx); err != nil && !errors.Is(err, context.Canceled) {
		log.Printf("mDNS responder exited: %s", err)
	}
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
