import React, { Component } from 'react';
import NavBar from './components/navbar';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Counters from './components/Counters';

function App() 
{
    return ( 
      //needed as mutiple root elements are being returned
      <React.Fragment>
        <NavBar />
          <main className = 'container'>
            <Counters />
          </main>
      </React.Fragment>
    );
}

export default App;
