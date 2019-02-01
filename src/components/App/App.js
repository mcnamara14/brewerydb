import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import withStyles from '@material-ui/core/styles/withStyles'
import breweriesdb from '../../breweries.json'
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { selectBrewery } from '../../actions/selectBrewery'

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

  findBrewery = breweryName => {
    const brewery = breweriesdb.find((brewery) => {
      return brewery.name === breweryName && brewery.id
    }) 

    const id = brewery.id
    id ? this.displayBreweryInfo(id) : this.missingBreweryError();
  }

  missingBreweryError(){
    
  }

  displayBreweryInfo(id){
    this.props.selectedBrewery(id)
    
    this.props.history.push('/brewery')
  }

  render() {
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
            onClick={e => this.handleSubmit(e)}
            type="submit"
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

export const mapDispatchToProps = (dispatch) => ({
  selectedBrewery: id => {
    return dispatch(selectBrewery(id))
  }
})

export const mapStateToProps = (state) => ({
  selectedBrewery: state.selectedBrewery
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(App)