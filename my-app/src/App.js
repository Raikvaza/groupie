import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import React, { Component } from 'react';
export const ENDPOINT = "http://localhost:4000";




class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      temp: ""
    }
    
  }

  render(){
    
    var sendPOST = async() => {
      await fetch(`${ENDPOINT}/healthcheck`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify("hello")
      }).then((r) => r.json())
      .then((data) => {
        // jsonData = JSON.stringify(data)
      this.setState ({ temp: JSON.stringify(data)})
      console.log(this.state.temp);
      }); 
    }

    return (
      <div className="App">
        <Header />
        <Main data={this.state.temp}/>
        <button type='submit' onClick={sendPOST}> Send</button>
        
      </div>
    );
  }
}

export default App;
/*
button is pressed
sendPOST function updates updates the state of App
Main has props with the updated state
the send props will then be presented within a div of Main

*/