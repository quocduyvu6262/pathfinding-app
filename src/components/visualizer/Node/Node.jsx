import React, {Component} from "react";
import './Node.css';

export default class Node extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    
    render(){
        const {isStart, isFinish} = this.props;
        var extra_class_name = "";
        if(isFinish){
            extra_class_name = "nodeFinish";
        } 
        else if(isStart){
            extra_class_name = "nodeStart";
        } 
        return (
            <div className={`node ${extra_class_name}`}></div>
        );
    }
}

