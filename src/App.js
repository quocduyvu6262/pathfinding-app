import React , { Component}  from 'react';
import './App.css';

import {Generate, Start, End, Delete, Unweighted, Weighted, Options, Speed, Commence, Visualizer } from './components';
import {Actions, Grid, Header} from './containers'


export default function App(){
  return(
    <div className='App'>
      <div className = 'gradient__bg'>
        <Header />
      </div>
    </div>
  );
}
