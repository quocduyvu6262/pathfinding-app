import React , { Component}  from 'react';
import './App.css';

import {Actions, Grid, Header, Footer} from './containers'


export default function App(){
  return(
    <div className='App'>
      <div className = 'header'>
        <Header />
      </div>
      <div className = 'float-container'>
        <div className = 'float-actions'>
          <Actions />
        </div>
        <div className = 'float-grid'>
          <Grid />
        </div>
      </div>
    </div>
  );
}
