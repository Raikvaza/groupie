import React from "react"
import Header from "../components/Header/Header"
import { Component } from "react"
import {useSearchParams} from "react-router-dom";
import { ENDPOINT } from "..";
import { useState, useEffect } from "react";
// const search = useLocation().search;  
//     const name = new URLSearchParams(search).get('id');
// console.log(name);

function Artist () {
const [artistInfo, setArtist] = useState("");
const [fetched, setFetch] = useState(false);
const [searchParams] = useSearchParams();
const [fullData, setData] = useState({});

useEffect(() => {
  
  if (fetched){
    for (const key of Object.keys(artistInfo.DatesLocations)){  
      //console.log(artistInfo.DatesLocations[key]);  
      //console.log(artistInfo.DatesLocations[key])
      if (key){
        fullData[key] = []
        artistInfo.DatesLocations[key].map((value) => {
          
          fullData[key].push(value)
        })
      }
    }  
  }


  // console.log(fullData);
  // if(fetched) {
  //   //Object.keys(artistInfo.DatesLocations).map((value, key) =>{
  //   const keys = Object.keys(dates.DatesLocations)  
  //   console.log(keys);
  //     // value.map((val, ind) => {
  //     //   //console.log("\n index: ",ind,"\n value:", val);
  //     //   if(ind == 0){
  //     //     setCountry(val)
  //     //   }
        
  //     // })
  
  // }
    
    
    // <div key={key}>
    //     {key.map((value, index) => {
          
    //       console.log("value is : ", value);
    //       console.log("index is : ", index);
    //       console.log("value[index] is : ", value[index]);
    //     })}
    // </div>
  




//    console.log(artistInfo.DatesLocations);
      if (!fetched){(async() => {
              await fetch(`${ENDPOINT}/api/artist?id=${searchParams.get('id')}`, {
                method: "GET"
              }).then((r) => r.json())
              .then((data) => {
              setArtist(data)
              setFetch(true)
              console.log(data);
              }); 
            })();
      }
}, [fetched]);




        return(
            <div className="asd"> 
              <Header />
              <img src={artistInfo.image} alt="image"></img>
            
              <div className="artist-data">
                <h3>{fetched? artistInfo.name: <p>Loading data</p>}</h3>
                <h4>First album: {fetched? artistInfo.firstalbum:<p>Loading data</p>}</h4>
                  <div className="memebers">
                    <h3>Members: {fetched? artistInfo.members.map((value => <li>{value}</li>)): <p>Loading data</p>}</h3>
                  </div>
              </div>
                

              <div className="artist-concerts">
                {
                  Object.entries(fullData).map(([key, value], index) => {
                    return (<ul key={key}>
                            <h4>{key}</h4>
                            {fullData[key].map(element => <li key={element}>{element}</li>)}
                          
                            </ul> 
                    )
                  })
                }
                </div> 
            </div>

        );
    
}

export default Artist;



// class Artist extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             data: []
//         }
//     }
//     componentDidUpdate(prevProps, prevState){
//         if (prevState.temp !== this.state.temp){
//           console.log("state changed");
//         }
//       }
//     componentDidMount(){
//         console.log(this.props.location);
//         (async() => {
//          await fetch(`${ENDPOINT}/api/artist?id=${searchParams.get('id')}`, {
//             method: "GET"
//             // body: JSON.stringify("hello")
//           }).then((r) => r.json())
//           .then((data) => {
//             // jsonData = JSON.stringify(data)
//           this.setState ({ data: data})
//           console.log(this.state.data);
//           }); 
//         })();
//       }
//       render(){
//         return(
//             <div>
//                 <Header />
//                 {this.state.data}                
                
//             </div>


//         )
//       }

// }





 // {fetched && Object.entries(artistInfo.DatesLocations).map((value)=>{
  //     return (
  //       value.map((val, ind) => {
  //         //console.log("\n index: ",ind,"\n value:", val);
  //         return(
  //           ind===0 ? <p>{val}</p>:""
  //         )
          
  //       })
  //     )
      
      
  //     // <div key={key}>
  //     //     {key.map((value, index) => {
            
  //     //       console.log("value is : ", value);
  //     //       console.log("index is : ", index);
  //     //       console.log("value[index] is : ", value[index]);
  //     //     })}
  //     // </div>
  //   })
  // }

