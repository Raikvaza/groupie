package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

type Todo struct {
	ID    int    `json:"id"`
	Title string `json:"title"`
	Done  bool   `json:"done"`
	Body  string `json:"body"`
}

var result string

func HealthCheck(w http.ResponseWriter, r *http.Request) {
	fmt.Println("we are in")
	rContent, err := ioutil.ReadAll(r.Body)
	if err != nil {
		log.Println(err)
		return
	}
	json.Unmarshal(rContent, result)
	fmt.Println(result)
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token")
	w.Header().Set("Access-Control-Allow-Credentials", "true")
	// w.Write([]byte(resp))
	todo := Todo{
		ID:    1,
		Title: "First JSON",
		Done:  true,
		Body:  "You did it!!!!",
	}
	respo, err := json.Marshal(todo)
	if err != nil {
		log.Println("Couldn't marshal JSON")
		return
	}
	w.Write(respo)
}

func main() {

	http.HandleFunc("/healthcheck", HealthCheck)
	log.Println("Starting a server at http://localhost:4000")
	log.Fatal(http.ListenAndServe(":4000", nil))

}
