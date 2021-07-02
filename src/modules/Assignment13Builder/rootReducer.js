import { combineReducers } from "redux";
import { productReducer } from "./reduxComponents/reducer";

export const rootReducer = combineReducers({
  productReducer,
});
