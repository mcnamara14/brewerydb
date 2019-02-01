import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid'
import { Button } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

        <Button variant="outlined" color="secondary">This is a button</Button>
        </header>
      </div>
    );
  }
}

export default App;
