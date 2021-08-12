import { combineReducers } from "redux";
import state from "./state";

const rootReducer = combineReducers({
  state: state,
});

export default rootReducer;
