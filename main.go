package main

import (
	"log"
	"net/http"
	"os"

	"github.com/grandcat/zeroconf"
)

var staticFiles *http.Handler
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
	http.HandleFunc("/api/", httpForbidden)
	http.HandleFunc("/auth/token", httpBad)

	// Serve static help files
	staticFiles := http.FileServer(http.Dir(wwwRoot))
	http.Handle("/landingpage/", http.StripPrefix("/landingpage", staticFiles))

	// Start mDNS broadcast
	publishHomeAssistant()

	// Run webserver
	log.Print("Start webserver on http://0.0.0.0:80")
	http.ListenAndServe(":8321", nil)
}
