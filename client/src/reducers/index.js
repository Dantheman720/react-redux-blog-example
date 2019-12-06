import { combineReducers } from "redux";
import groceryReducer from "./groceryReducer";

export default combineReducers({
  groceries: groceryReducer
});
