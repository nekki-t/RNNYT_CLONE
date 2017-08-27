import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import navigationReducer from './reducers/navigationReducer';

const logger = createLogger();

export default (initialState = {}) => (
  createStore(
    combineReducers({
      navigation: navigationReducer
    }),
    initialState,
    applyMiddleware(logger, promiseMiddleware)
  )
);
