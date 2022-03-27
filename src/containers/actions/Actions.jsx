import React from 'react';
import "./actions.css";
import {Generate, Start, End, Delete, Unweighted, Weighted, Options, Speed, Commence, Visualizer } from "../../components"

export default class Actions extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className = 'main-container'>
                <Generate />
                <Start />
                <End />
                <Unweighted />
                <Weighted />
                <Options />
                <Speed />
                <Commence />
            </div>
        )
    }
}