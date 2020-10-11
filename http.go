package main

import (
	"io/ioutil"
	"net/http"
)

func httpIndex(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		http.Error(w, http.StatusText(http.StatusNotFound), http.StatusNotFound)
		return
	}
	data, _ := ioutil.ReadFile(wwwRoot + "/index.html")

	w.Header().Add("Content-Type", "text/plain")
	w.Write(data)
}

func httpForbidden(w http.ResponseWriter, r *http.Request) {
	http.Error(w, http.StatusText(http.StatusForbidden), http.StatusForbidden)
	return
}

func httpBad(w http.ResponseWriter, r *http.Request) {
	http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
	return
}
