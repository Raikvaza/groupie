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
const [dates, setDates] = useState("");
const [country, setCountry] = useState("");
const [fetched, setFetch] = useState(false);
const [searchParams] = useSearchParams();
const [fullData, setData] = useState({});

var tempo = []
var cities = []
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


  console.log(fullData);
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
            
           
                <div className="locations">
                  {
                    Object.entries(fullData).map(([key, value], index) => {
                      return (<ul key={index}>
                              <h1>{key}</h1>
                              {/* {fullData[key].forEach(element => {return(<p> {element}</p>)})}
                               */}
                              <li key={fullData[key].index}>{value}</li>
                              
                              
                              
                              </ul> 
                      )
                    })
                  }
                </div> 
           
            {/* {Object.entries(artistInfo).map(([key,value]) => (
                <div key={key}> 
               <p>{value} </p>
               </div>   
            ))} */}
            </div>

        );
    
}





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

export default Artist;



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

