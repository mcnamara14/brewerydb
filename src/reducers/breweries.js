const breweries = (
  state = [], action) => {
    switch (action.type) {
      case 'STORE_BREWERY':
      return [...state, action.brewery]
      default:
       return state
    }
  }

  export default breweries