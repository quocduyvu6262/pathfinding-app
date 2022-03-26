import React from 'react';
import "./header.css";

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className = 'header'> 
                <h1 id='header-content'>Pathfinding Visualizer</h1>
            </div>
        )
    }
}