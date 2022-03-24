import logo from './logo.svg';
import './App.css';
import React , { Component}  from 'react';
import Visualizer from './PathfindingVisualizer/Visualizer';


function App(){
  return(
    <div className='App'>
      <Visualizer></Visualizer>
    </div>
  );
}

export default App;