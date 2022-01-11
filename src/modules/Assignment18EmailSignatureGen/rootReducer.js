import { combineReducers } from "redux";
import { infoReducer } from "./reduxComponents/reducer";

export const rootReducer = combineReducers({
  infoReducer,
});
