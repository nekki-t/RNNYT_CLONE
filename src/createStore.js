import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import navigationReducer from './reducers/navigationReducer';
import newsFeedReducer from './reducers/newsFeedReducer';
import searchTermReducer from './reducers/searchTermReducer';
import bookmarkReducer from './reducers/bookmarkReducer';

const logger = createLogger();

export default (initialState = {}) => (
  createStore(
    combineReducers({
      navigation: navigationReducer,
      news: newsFeedReducer,
      searchTerm: searchTermReducer,
      bookmarks: bookmarkReducer
    }),
    initialState,
    applyMiddleware(logger, promiseMiddleware)
  )
);
