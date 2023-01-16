package server

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

func Parser() *[]Artist {
	artistPage, err := http.Get("https://groupietrackers.herokuapp.com/api/artists") // Fetch the URL and get a response with the contents in the body
	if err != nil {
		log.Fatal(err)
	}
	defer artistPage.Body.Close() // caller should always close the response body when done

	content, err := ioutil.ReadAll(artistPage.Body) // reading the contents that returns an array of bytes
	if err != nil {
		log.Fatal(err)
	}

	err = json.Unmarshal(content, &Artists) // unmarshalling our JSON into an array of Artist objects
	if err != nil {
		log.Fatal(err)
	}
	return &Artists
}

func parseLocations(id string, idNum int) {
	tempReader, err := http.Get("https://groupietrackers.herokuapp.com/api/relation/" + id)
	if err != nil {
		fmt.Println("couldn't find an artist")
		return
	}
	defer tempReader.Body.Close()
	body, err := ioutil.ReadAll(tempReader.Body)
	if err != nil {
		fmt.Println("Couldn't read from JSON of an artist")
		return
	}
	var temp Relations
	if err = json.Unmarshal(body, &temp); err != nil {
		fmt.Println("Couldn't unmarshal the JSON of an artist")
		return
	}
	// for k, v := range temp.DatesLocations {
	// 	var tempCityArr []string
	// 	var tempStr string
	// 	tempCityArr = strings.Split(k, "-")
	// 	for i := 0; i < len(tempCityArr); i++ {
	// 		tempStr += strings.Title(tempCityArr[i]) + " "
	// 	}

	// 	temp.DatesLocations[tempStr] = v
	// 	fmt.Println(temp.DatesLocations)
	// 	// fmt.Println("Key is ", k, "with the value : ", v)
	// }

	Artists[idNum-1].DatesLocations = temp.DatesLocations
	// fmt.Println(temp.DatesLocations)
}
