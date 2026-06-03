package main

import (
	"log"
	"net/http"
	"os"
	"os/signal"
	"sync/atomic"
	"syscall"

	"github.com/libp2p/zeroconf/v2"
)

// mdns is written from the publishHomeAssistant() goroutine once
// zeroconf.RegisterProxy() succeeds and read from main()'s deferred shutdown
// on SIGTERM/SIGINT. The two routines never synchronise, so the pointer is
// stored atomically to make the write visible to the reader without a race.
var mdns atomic.Pointer[zeroconf.Server]
var wwwRoot string
var development bool

func getSupervisorHost() string {
	supervisorHost := "supervisor"

	if development && os.Getenv("SUPERVISOR_HOST") != "" {
		supervisorHost = os.Getenv("SUPERVISOR_HOST")
	}

	return supervisorHost
}

func setSupervisorAuthHeader(r *http.Request) {
	token := os.Getenv("SUPERVISOR_TOKEN")
	if token != "" {
		r.Header.Add("Authorization", "Bearer "+token)
	} else {
		log.Println("No SUPERVISOR_TOKEN set, request will be unauthenticated")
	}
}

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
	http.HandleFunc("/supervisor-api/supervisor/ping", httpSupervisorProxy)
	http.HandleFunc("/supervisor-api/supervisor/logs", httpSupervisorProxy)
	http.HandleFunc("/supervisor-api/supervisor/logs/follow", httpSupervisorProxy)
	http.HandleFunc("/supervisor-api/resolution/", httpSupervisorProxy)
	http.HandleFunc("/supervisor-api/network/", httpSupervisorProxy)
	http.HandleFunc("/supervisor-api/jobs/", httpSupervisorProxy)

	// Serve static help files
	staticFiles := http.FileServer(http.Dir(wwwRoot))
	http.Handle("/static/", staticFiles)
	http.Handle("/frontend_es5/", staticFiles)
	http.Handle("/frontend_latest/", staticFiles)

	// Start mDNS broadcast in the background; publishHomeAssistant() can
	// block for several seconds while Supervisor comes up, and we don't want
	// that to hold up the webserver. defer Shutdown() lives here in main()
	// so the TTL=0 goodbye only fires on actual process exit, not at the
	// goroutine's first return (see #190).
	log.Print("Start mDNS broadcast")
	go publishHomeAssistant()
	defer func() {
		if s := mdns.Load(); s != nil {
			s.Shutdown()
		}
	}()

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
