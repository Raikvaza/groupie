import {Component} from 'react';
import {ENDPOINT} from '..'
import React from 'react';
import Header from '../components/Header/Header'
import Main from '../components/Main/Main';

class Home extends Component {
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

  export default Home;