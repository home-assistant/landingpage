package main

import (
	"io"
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
	"os"
	"path"
	"regexp"
	"strings"
)

var regexASCII = regexp.MustCompile(`\x1b\[\d+m`)

func httpIndex(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" && r.URL.Path != "/auth/authorize" {
		http.Error(w, http.StatusText(http.StatusNotFound), http.StatusNotFound)
		return
	}
	data, err := os.ReadFile(wwwRoot + "/index.html")
	if err != nil {
		log.Printf("failed to read index.html: %v", err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	if _, err := w.Write(data); err != nil {
		log.Printf("failed to write response: %v", err)
	}
}

func httpUnauthorized(w http.ResponseWriter, r *http.Request) {
	http.Error(w, http.StatusText(http.StatusUnauthorized), http.StatusUnauthorized)
}

func httpBad(w http.ResponseWriter, r *http.Request) {
	http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
}

func httpLogs(w http.ResponseWriter, r *http.Request) {
	response, err := http.Get("http://observer/logs")

	if err != nil || response.StatusCode >= 300 {
		log.Printf("Observer /logs fails: %s", err)
		http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
		return
	}
	defer func() {
		if err := response.Body.Close(); err != nil {
			log.Printf("error closing response body: %v", err)
		}
	}()

	data, err := io.ReadAll(response.Body)
	if err != nil {
		log.Printf("Issue with fetch the logs: %s", err)
		http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
		return
	}

	logs := regexASCII.ReplaceAllLiteralString(string(data), "")
	if _, err := w.Write([]byte(logs)); err != nil {
		log.Printf("failed to write response: %v", err)
	}
}

func httpSupervisorProxy(w http.ResponseWriter, r *http.Request) {
	log.Printf("Proxy request: %s", r.URL.Path)

	// Base Supervisor URL
	supervisorHost := getSupervisorHost()

	u, err := url.Parse("http://" + supervisorHost + "/")
	if err != nil {
		http.Error(w, "Internal Server Error: "+err.Error(), http.StatusInternalServerError)
		return
	}

	// Strip "/supervisor-api/" from the path
	trimmedPath := strings.TrimPrefix(r.URL.Path, "/supervisor-api/")

	// Split the path into parts, the first part is the subpath (e.g., resolution or network)
	parts := strings.SplitN(trimmedPath, "/", 2)
	if len(parts) < 2 {
		http.Error(w, "Bad request: missing path", http.StatusBadRequest)
		log.Printf("Invalid path: %s", r.URL.Path)
		return
	}

	// Extract subpath (e.g., resolution or network)
	subPath := parts[0]

	// The remainder path (after the subpath) to be sanitized
	remainderPath := "/" + parts[1]

	// Clean the remainder path to avoid path traversal attacks
	cleanPath := path.Clean(remainderPath)

	// Ensure it's under the intended subpath (e.g., /resolution or /network)
	if cleanPath != remainderPath {
		http.Error(w, "Forbidden: Invalid path", http.StatusForbidden)
		log.Printf("Blocked path traversal attempt: %s", cleanPath)
		return
	}

	// Update the request path to be forwarded
	r.URL.Path = "/" + subPath + cleanPath

	// Create the reverse proxy
	proxy := httputil.NewSingleHostReverseProxy(u)

	// Add authorization header
	setSupervisorAuthHeader(r)

	switch cleanPath {
	case "/logs":
		// for logs download add text/plain headers
		r.Header.Add("Accept", "text/plain")
	case "/logs/follow":
		// Set FlushInterval to enable streaming
		proxy.FlushInterval = -1
	}

	// Forward the request
	proxy.ServeHTTP(w, r)
}
