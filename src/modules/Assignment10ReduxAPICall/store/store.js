import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../../Assignment10ReduxAPICall/rootReducer";

const logger = createLogger();
const Middlewares = compose(applyMiddleware(thunk, logger));
const store = createStore(rootReducer, Middlewares);

export default store;
