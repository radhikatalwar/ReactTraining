import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "../rootReducer";
import thunk from "redux-thunk";

const Middlewares = compose(applyMiddleware(thunk, logger));
export const store = createStore(rootReducer, Middlewares);
