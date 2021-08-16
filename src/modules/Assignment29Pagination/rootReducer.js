import { combineReducers } from "redux";
import dataReducer from "./ReduxComponents/reducer";

const rootReducer = combineReducers({
  dataReducer,
});

export default rootReducer;
