package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net"
	"net/http"
	"os"
	"time"

	"github.com/grandcat/zeroconf"
	"github.com/rs/xid"
)

type Response struct {
	Result  string         `json:"result"`
	Message string         `json:"message,omitempty"`
	Data    map[string]any `json:"data,omitempty"`
}

func publishHomeAssistant() {
	var err error

	var outboundIP net.IP

	for {
		outboundIP, err = getOutboundIP()
		if outboundIP != nil {
			break
		}
		log.Printf("Failed to get outbound IP, retrying in 5s: %s", err)
		time.Sleep(5 * time.Second)
	}

	unique := xid.New()
	hostURL := "http://" + outboundIP.String() + ":8123"
	params := []string{
		"location_name=Home Assistant",
		"uuid=",
		"version=0.0.0",
		"external_url=",
		"internal_url=" + hostURL,
		"base_url=" + hostURL,
		// Always needs authentication
		"requires_api_password=True",
	}

	log.Printf("Publish %s to _home-assistant._tcp", hostURL)
	mdns, err = zeroconf.Register("homeassistant-"+unique.String(), "_home-assistant._tcp", "local.", 8123, params, nil)
	if err != nil {
		log.Fatal(err)
	}
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

// Get IP address of the default interface from Supervisor
func getOutboundIP() (net.IP, error) {
	supervisorHost := getSupervisorHost()

	client := &http.Client{}
	req, err := http.NewRequest("GET", "http://"+supervisorHost+"/network/interface/default/info", nil)

	if err != nil {
		return nil, fmt.Errorf("can't create request to Supervisor: %s", err)
	}

	req.Header.Add("Authorization", "Bearer "+os.Getenv("SUPERVISOR_TOKEN"))

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

		return nil, fmt.Errorf("can't get default interface from Supervisor: %s", errorMsg)
	}

	var responseData Response

	if err := json.NewDecoder(response.Body).Decode(&responseData); err != nil {
		return nil, fmt.Errorf("can't parse default interface data: %s", err)
	}

	ipv4Addr, err := getFirstIPv4Address(responseData.Data)
	if err != nil {
		return nil, err
	}

	return ipv4Addr, nil
}
