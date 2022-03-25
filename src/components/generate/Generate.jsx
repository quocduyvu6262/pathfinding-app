import React from 'react';
import "./generate.css";

export default class Generate extends React.Component{
    constructor(props){
        super(props);
        this.state = '';
    }
    render(){
        return (
            <div>Generate Random Maze</div>
        )
    }
}