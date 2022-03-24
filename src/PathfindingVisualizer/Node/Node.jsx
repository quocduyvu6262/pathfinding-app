import React, {Component} from "react";
import './Node.css';

export default class Node extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    
    render(){
        const {isStart, isFinish} = this.props;
        const className = "node";
        if(isFinish){
            className = "nodeFinish";
        } 
        else if(isStart){
            className = "nodeStart";
        } 
        return (
            <div className={"${className}"}></div>
        );
    }
}

