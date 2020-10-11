package main

import (
	"log"
	"net/http"
	"os"
)

var staticFiles *http.Handler
var wwwRoot string
var development bool

func main() {
	development = (os.Getenv("DEVELOPMENT") == "True")

	if development {
		wwwRoot = "./rootfs/usr/share/www/"
	} else {
		wwwRoot = "/usr/share/www/"
	}

	// Serve static help files
	staticFiles := http.FileServer(http.Dir(wwwRoot))
	http.Handle("/landingpage/", http.StripPrefix("/landingpage", staticFiles))

	log.Print("Start webserver on http://0.0.0.0:80")
	http.ListenAndServe(":8321", nil)
}
