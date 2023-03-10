package server

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"strconv"
)

type Artist struct {
	Id             int      `json:"id"`
	Image          string   `json:"image"`
	Name           string   `json:"name"`
	Members        []string `json:"members"`
	CreationDate   int      `json:"creationDate"`
	FirstAlbum     string   `json:"firstalbum"`
	Relations      string   `json:"relations"`
	DatesLocations map[string][]string
}

var Artists []Artist

type Relations struct {
	DatesLocations map[string][]string `json:"datesLocations"`
}

func exists(path string) (bool, error) {
	_, err := os.Stat(path)
	if err == nil {
		return true, nil
	}
	if os.IsNotExist(err) {
		return false, nil
	}
	return false, err
}

func HomeHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("Homepage fetch")
	if r.URL.Path != "/api" {
		http.Error(w, "404 Page not found", http.StatusNotFound)
		return
	}
	if r.Method != http.MethodGet {
		http.Error(w, "405 method not allowed", http.StatusMethodNotAllowed)
		return
	}

	tempArtist := Parser() // returns []Artist
	fileExists, tempErr := exists("./api.txt")
	if tempErr != nil {
		log.Println("Coulnd't check file api.txt")
		return
	}
	if !fileExists {
		log.Println("Creating api.txt file")
		tempFile, err := os.Create("api.txt")
		if err != nil {
			fmt.Println("Couldn't create the file")
			return
		}
		tempInfo, err := json.MarshalIndent(tempArtist, "", "    ")
		if err != nil {
			return
		}
		os.WriteFile(tempFile.Name(), tempInfo, 0666)
	}

	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token")
	w.Header().Set("Access-Control-Allow-Credentials", "true")

	// w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(tempArtist)
	// resulto, err := json.MarshalIndent(person, "", "      ")
	// if err != nil {
	// 	return
	// }
}

func ArtistHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("Artist request") //LOG
	artistStringId := r.URL.Query().Get("id")
	log.Println("Parsed Query ID = ", artistStringId) //LOG
	artistId, err := strconv.Atoi(artistStringId)
	if err != nil {
		fmt.Println(artistId)
		w.WriteHeader(404)
		return
	}
	if artistId < 1 || artistId > 52 {
		w.WriteHeader(404)
		return
	}
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token")
	w.Header().Set("Access-Control-Allow-Credentials", "true")

	parseLocations(artistStringId, artistId)
	json.NewEncoder(w).Encode(Artists[artistId-1])
}
