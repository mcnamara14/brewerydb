import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import withStyles from '@material-ui/core/styles/withStyles'


const styles = {
  container: {
    background: "#eee",
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
  render() {
    const {classes} = this.props
    return <Grid container justify="center">
        <Grid item className={classes.container} xs={6}>
          <Input className={classes.input} />
          <Button color="secondary" variant="contained" className={classes.button}>Find Breweries</Button>
        </Grid>
      </Grid>;
  }
}

export default withStyles(styles)(App);
