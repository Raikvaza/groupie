import React from 'react';
import './Main.css';
import { Component } from 'react';
// const Main = () =>(
//     <div className='header'>
//       <h2>Go and React Chat App</h2>  
//     </div>
// );


class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: "Hello"
        }
    }
    componentDidUpdate(prevProps) {
        console.log("asdasd");
        if (prevProps.data !== this.props.data) {
      
            this.setState({data: this.props.data})
        }
      
      }        
    
   
    render(){
        return(
        <div className='main-container'> 
            <h2> Main container</h2>
            <div className='json'>
                {this.state.data}
            </div>
        </div>
        )
    }
} 

export default Main;