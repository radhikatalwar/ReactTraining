import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "../rootReducer";

const Middlewares = compose(applyMiddleware(logger));
export const store = createStore(rootReducer, Middlewares);
