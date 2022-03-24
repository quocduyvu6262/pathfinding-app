import React, {Component} from "react";
import './Node.css';

export default class Node extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    
    render(){
        const {isStart, isFinish} = this.props;
        return (
            <div className="node"></div>
        );
    }
}

