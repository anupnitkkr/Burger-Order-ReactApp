import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import React from "react";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import DevTools from "../containers/DevTools";
// set up our composeEnhancers function, baed on the existence of the
// DevTools extension when creating the store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, thunk, logger];
const composables = [applyMiddleware(...middlewares)];
const enhancer = compose(...composables);
export default function configureStore(initalState) {
  return {
    ...createStore(rootReducer, initalState, enhancer),
    runSaga: sagaMiddleware.run
  };
}
