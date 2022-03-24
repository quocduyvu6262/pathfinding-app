import React, {Component} from "react";
import Node from './Node/Node'
import './Visualizer.css'

const GRID_ROW_LENGTH = 15;
const GRID_COL_LENGTH = 50;
export default class Visualizer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            grid: []
        }
    }
    componentDidMount(){
        const grid = [];
        for(let row = 0;row < GRID_ROW_LENGTH; row++){
            const current_row = [];
            for(let col = 0;col < GRID_COL_LENGTH;col++){
                const currentNode = {
                    col,
                    row,
                    isStart: row === 10 && col === 5,
                    isFinish: row === 10 && col ==   45
                }
                current_row.push(currentNode  );
            }
            grid.push(current_row);
        }
        this.setState({grid});
    }
    render(){
        const {grid} = this.state;
        console.log(grid);
        return (
            <div className = 'grid'>
                {grid.map((row,rowIdx)=>{
                    return(
                        <div key = {rowIdx}>
                            {row.map((node,nodeIdx)=>{
                                const {isStart, isFinish} = node;
                                return (
                                    <Node key = {nodeIdx} isStart = {isStart} isFinish = {isFinish}>
                                    </Node>
                                )
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
}


