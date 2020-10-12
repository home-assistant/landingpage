package main

import (
	"log"
	"net"

	"github.com/grandcat/zeroconf"
	"github.com/rs/xid"
)

func publishHomeAssistant() {
	var err error

	unique := xid.New()
	hostURL := "http://" + getOutboundIP().String() + ":8123"
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

// Get preferred outbound ip of this machine
// https://stackoverflow.com/a/37382208
// Can be removed after Supervisor v248 with new lookup
func getOutboundIP() net.IP {
	conn, err := net.Dial("udp", "8.8.8.8:80")
	if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()

	localAddr := conn.LocalAddr().(*net.UDPAddr)

	return localAddr.IP
}
