import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import withStyles from '@material-ui/core/styles/withStyles'
import breweriesdb from '../../breweries.json'


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

class Brewery extends Component {


  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center">
        <Grid item className={classes.container} xs={6}>Brewery
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Brewery);
