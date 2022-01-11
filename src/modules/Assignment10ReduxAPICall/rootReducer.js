import { combineReducers } from "redux";
import dataReducer from "./screens/APIData/reducer";

const rootReducer = combineReducers({
  dataReducer,
});

export default rootReducer;
