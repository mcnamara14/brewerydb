const breweries = (
  state = [], action) => {
    switch (action.type) {
      case 'ADD_BREWERY':
      return [...state, action.name]
      default:
       return state
    }
  }

  export default breweries