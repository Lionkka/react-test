import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import items from './reducer/items';
import sidebar from './reducer/sidebar';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  items,
  sidebar
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);