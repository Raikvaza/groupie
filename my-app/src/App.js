import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import React, { Component } from 'react';
export const ENDPOINT = "http://localhost:4000";




class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      temp: []
    }
    
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.temp !== this.state.temp){
      console.log("state changed");
    }
  }
  componentDidMount(){
    (async() => {
      await fetch(`${ENDPOINT}/api`, {
        method: "GET"
        // body: JSON.stringify("hello")
      }).then((r) => r.json())
      .then((data) => {
        // jsonData = JSON.stringify(data)
        console.log(data);
      this.setState ({ temp: data})
      console.log(this.state.temp);
      }); 
    })();
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Main data={this.state.temp}/>
        {/* <button type='submit' onClick={sendPOST}> Send</button>
         */}
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