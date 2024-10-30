package main

import (
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"

	"github.com/grandcat/zeroconf"
)

var mdns *zeroconf.Server
var wwwRoot string
var development bool

func main() {
	development = (os.Getenv("DEVELOPMENT") == "True")

	if development && os.Getenv("FRONTEND_PATH") != "" {
		wwwRoot = os.Getenv("FRONTEND_PATH") + "/landing-page/dist/"
	} else if development {
		wwwRoot = "./rootfs/usr/share/www/"
	} else {
		wwwRoot = "/usr/share/www/"
	}

	http.HandleFunc("/", httpIndex)
	http.HandleFunc("/api/", httpUnauthorized)
	http.HandleFunc("/auth/token", httpBad)
	http.HandleFunc("/observer/logs", httpLogs)
	http.HandleFunc("/supervisor/supervisor/logs", httpSupervisorProxy)
	http.HandleFunc("/supervisor/supervisor/logs/follow", httpSupervisorProxy)
	http.HandleFunc("/supervisor/resolution/", httpSupervisorProxy)
	http.HandleFunc("/supervisor/network/", httpSupervisorProxy)

	// Serve static help files
	staticFiles := http.FileServer(http.Dir(wwwRoot))
	http.Handle("/static/", staticFiles)
	http.Handle("/frontend_es5/", staticFiles)
	http.Handle("/frontend_latest/", staticFiles)

	// Start mDNS broadcast
	log.Print("Start mDNS broadcast")
	publishHomeAssistant()
	defer mdns.Shutdown()

	// Run webserver
	go func() {
		log.Print("Start webserver on http://0.0.0.0:8123")
		if err := http.ListenAndServe(":8123", nil); err != nil {
			log.Fatal(err)
		}
	}()

	signalChannel := make(chan os.Signal, 2)
	signal.Notify(signalChannel, os.Interrupt, syscall.SIGTERM)
	for {
		sig := <-signalChannel
		switch sig {
		case os.Interrupt:
			return
		case syscall.SIGTERM:
			return
		}
	}
}
