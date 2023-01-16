import React from 'react';
import './Main.css';
import { Link } from "react-router-dom";
import { Component } from 'react';
import {ENDPOINT} from '../..'

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
                        {/* {`${ENDPOINT}/api/artist?id=${user.id}`} */}
                        {/* <a href={`artist?id=${user.id}`}> <img src={user.image} alt="asd"/></a> */}
                            
                        <Link to={`artist?id=${user.id}`}>
                            <img src={user.image} alt="asd"/>
                        
                                                
                                                <h4> {user.name}</h4>
                                                </Link>

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