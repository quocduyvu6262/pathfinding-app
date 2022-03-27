import React from 'react';
import "./unweighted.css";

export default class Unweighted extends React.Component{
    constructor(props){
        super(props);
        this.state = '';
    }
    render(){
        return (
            <div id='unweighted'>Unweighted Node</div>
        )
    }
}