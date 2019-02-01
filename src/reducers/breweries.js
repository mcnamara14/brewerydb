const breweries = (
  state = [], action) => {
    switch (action.type) {
      case 'ADD_BREWERY':
      return [...state, action.brewery]
      default:
       return state
    }
  }

  export default breweries