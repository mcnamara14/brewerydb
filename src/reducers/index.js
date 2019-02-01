import { combineReducers } from "redux";
import breweries from "./breweries";
import selectedBrewery from './selectedBrewery';

const rootReducer = combineReducers({
  breweries: breweries,
  selectedBrewery: selectedBrewery
});

export default rootReducer;
