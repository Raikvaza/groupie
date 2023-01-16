import React from "react"
import Header from "../components/Header/Header"
import { Component } from "react"
// import {useLocation} from "react-router-dom";


class Artist extends Component{
    constructor(props){
        super(props)
    }

    // componentDidMount(){
    // console.log(name);
    //     (async() => {
    //       await fetch(`${ENDPOINT}/api/`, {
    //         method: "GET"
    //         // body: JSON.stringify("hello")
    //       }).then((r) => r.json())
    //       .then((data) => {
    //         // jsonData = JSON.stringify(data)
    //         console.log(data);
    //       this.setState ({ temp: data})
    //       console.log(this.state.temp);
    //       }); 
    //     })();
    //   }
    render(){        
        // const search = useLocation().search;  
        // const name = new URLSearchParams(search).get('id');
    // console.log(name);        
        return(
            <div className="asd"> 
            <Header />
            <h2>asdasd</h2>
            </div>

        )
    }
}

export default Artist;