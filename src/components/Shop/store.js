import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import items from './reducer/items';
import sidebar from './reducer/sidebar';
import basket from './reducer/basket';

const reducers = combineReducers({
  items,
  sidebar,
  basket
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);