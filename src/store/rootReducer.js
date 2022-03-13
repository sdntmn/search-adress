import { combineReducers } from "redux";
import {
  streetReducer,
  houseReducer,
  flatReducer,
} from "./address/addressReducer.js";
import { clientReducer } from "./users/clientReducer";
import { searchReducer } from "./search/searchReducer";

export const rootReducer = combineReducers({
  allStreets: streetReducer,
  allHousesStreet: houseReducer,
  allFlatsHouse: flatReducer,
  clientsFlat: clientReducer,
  search: searchReducer,
});
