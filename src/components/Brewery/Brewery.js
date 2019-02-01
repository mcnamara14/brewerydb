import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import withStyles from '@material-ui/core/styles/withStyles';
import breweriesdb from '../../breweries.json';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import storeBrewery from '../../actions/storeBrewery';


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
  
  componentDidMount() {
    const selectedBreweryId = this.props.selectedBrewery
    const brewery = breweriesdb.find((brewery) => {
      if(selectedBreweryId === brewery.id) return brewery
    })
  
    this.props.storeBrewery(brewery)
  }

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

export const mapDispatchToProps = dispatch => ({
  storeBrewery: brewery => {
    return dispatch(storeBrewery(brewery));
  }
});

export const mapStateToProps = (state) => ({
  selectedBrewery: state.selectedBrewery
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Brewery);


