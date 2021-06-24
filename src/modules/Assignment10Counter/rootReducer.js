import { combineReducers } from "redux";
import counterReducer from "./screens/counter/reducer";

const rootReducer = combineReducers({
  counterReducer,
});

export default rootReducer;
