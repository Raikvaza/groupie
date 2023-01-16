import React from "react"
import Header from "../components/Header/Header"
import { Component } from "react"
import {useSearchParams} from "react-router-dom";
import { ENDPOINT } from "..";
import { useState, useEffect } from "react";
// const search = useLocation().search;  
//     const name = new URLSearchParams(search).get('id');
// console.log(name);

const Artist = () => {
    // console.log(searchParams.get('id'))
// var artistData    
var [dates, setDates] = useState();
const [fetched, setFetch] = useState(false);


const [searchParams] = useSearchParams();

(async() => {
    await fetch(`${ENDPOINT}/api/artist?id=${searchParams.get('id')}`, {
      method: "GET"
    }).then((r) => r.json())
    .then((data) => {
     setDates(data)
     console.log(dates);
     setFetch(true)
    }); 
  })();
    
// useEffect(() => {
// //console.log(`Our data is ${data.DatesLocations}`);

// })    
    
        return(
            <div className="asd"> 
            <Header />
               
               
            {dates.map(user => (
                <div key={user.id}> 
               <p>{fetched} </p>
               </div>   
            ))}
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



