package main

import (
	"log"
	"net/http"

	"github.com/Raikvaza/groupie/server"
)

func main() {
	http.HandleFunc("/api", server.HomeHandler)
	http.HandleFunc("/api/artist", server.ArtistHandler)
	log.Println("Starting a server at http://localhost:4000")
	log.Fatal(http.ListenAndServe(":4000", nil))
}
