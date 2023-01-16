import React from 'react';
import './Main.css';
import { Component } from 'react';
import {ENDPOINT} from '../../App'
// const Main = () =>(
//     <div className='header'>
//       <h2>Go and React Chat App</h2>  
//     </div>
// );


class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
      
            this.setState({data: this.props.data})
            console.log(typeof(this.state.data));
            console.log(this.state.data);
        }
      
      }        
    
   
    render(){
        return(
        <div className='main-container'> 
            <h2> Main container</h2>
            
            
            <div className='json-artists'>
                {this.state.data.map(user => (
                    <div key={user.id} className="artist-container">
                        <a href={`${ENDPOINT}/api/artist?id=${user.id}`}> <img src={user.image} alt="asd"/></a>

                        <h4> {user.name}</h4>
                        <p> Creation Date: {user.creationDate}</p>
                        <p> First Album: {user.firstalbum}</p>
                        {/* <p> {user.members.map((member) => {return `${member}`})}</p> */}
                    </div>
                ))}
                {/* {this.state.data} */}
            </div>
        </div>
        )
    }
} 

export default Main;