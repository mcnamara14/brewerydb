import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'

class App extends Component {
  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={10}><input>Search for breweries here...</input></Grid>
      </Grid>
    );
  }
}

export default App;
