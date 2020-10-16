package main

import (
	"log"
	"net/http"
	"os"

	"github.com/grandcat/zeroconf"
)

var mdns *zeroconf.Server
var wwwRoot string
var development bool

func main() {
	development = (os.Getenv("DEVELOPMENT") == "True")

	if development {
		wwwRoot = "./rootfs/usr/share/www/"
	} else {
		wwwRoot = "/usr/share/www/"
	}

	http.HandleFunc("/", httpIndex)
	http.HandleFunc("/api/", httpUnauthorized)
	http.HandleFunc("/auth/token", httpBad)
	http.HandleFunc("/observer/logs", httpLogs)

	// Serve static help files
	staticFiles := http.FileServer(http.Dir(wwwRoot))
	http.Handle("/landingpage/", http.StripPrefix("/landingpage", staticFiles))

	// Start mDNS broadcast
	log.Print("Start mDNS broadcast")
	publishHomeAssistant()
	defer mdns.Shutdown()

	// Run webserver
	log.Print("Start webserver on http://0.0.0.0:8123")
	http.ListenAndServe(":8123", nil)
}
