import { combineReducers } from "redux";
import { counter } from "../store/reducers/counter";
import { counterTwo } from "../store/reducers/counterTwo";

export const rootReducer = combineReducers({
  counter,
  counterTwo,
});
