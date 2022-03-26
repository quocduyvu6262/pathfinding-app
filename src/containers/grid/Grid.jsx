import React from 'react';
import "./grid.css";

import { Visualizer } from '../../components';
export default class Grid extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className = 'grid'>
                <Visualizer></Visualizer>
            </div>
        )
    }
}