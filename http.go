package main

import (
	"io/ioutil"
	"log"
	"net/http"
	"regexp"
)

var regexASCII = regexp.MustCompile(`\[\d+m`)

func httpIndex(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" && r.URL.Path != "/auth/authorize" {
		http.Error(w, http.StatusText(http.StatusNotFound), http.StatusNotFound)
		return
	}
	data, _ := ioutil.ReadFile(wwwRoot + "/index.html")

	w.Write(data)
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
	defer response.Body.Close()

	data, err := ioutil.ReadAll(response.Body)
	if err != nil {
		log.Printf("Issue with fetch the logs: %s", err)
		http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
		return
	}

	logs := regexASCII.ReplaceAllLiteralString(string(data), "")
	w.Write([]byte(logs))
}
