import React , { Component}  from 'react';
import './App.css';

import {Generate, Start, End, Delete, Unweighted, Weighted, Options, Speed, Commence, Visualizer } from './components';
import {Actions, Grid, Header, Footer} from './containers'


export default function App(){
  return(
    <div className='App'>
      <div className = 'header'>
        <Header />
      </div>
      <Grid />
      <Actions />
    </div>
  );
}
