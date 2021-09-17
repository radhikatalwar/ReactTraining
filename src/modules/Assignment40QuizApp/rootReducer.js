import { combineReducers } from "redux";
import dataReducer from "./reduxComponents/reducer";

const rootReducer = combineReducers({
  dataReducer,
});

export default rootReducer;
