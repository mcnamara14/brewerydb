const selectedBrewery = (
  state = "", action) => {
    switch (action.type) {
      case 'SELECT_BREWERY':
      return action.id
      default:
       return state
    }
  }

  export default selectedBrewery