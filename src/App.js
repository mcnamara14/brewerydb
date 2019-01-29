import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import withStyles from '@material-ui/core/styles/withStyles'
import breweriesdb from './breweries.json'


const styles = {
  container: {
    marginTop: 100,
    background: "",
  },
  input: {
    width: "100%",
    height: 50
  },
  button: {
    width: "100%",
    marginTop: 20
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: ""
    };
  }

  handleChange(e) {
    this.setState({
      inputVal: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.findBrewery(this.state.inputVal);
  };

  findBreweries(brewery){
    
  }

  render() {
    console.log(breweriesdb)
    const { classes } = this.props;
    return (
      <Grid container justify="center">
        <Grid item className={classes.container} xs={6}>
          <Input
            placeholder="Search by Location or Brewery"
            className={classes.input}
            onChange={e => this.handleChange(e)}
          />
          <Button
            color="secondary"
            variant="contained"
            className={classes.button}
          >
            Find Breweries
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
