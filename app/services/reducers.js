import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    routing: routing,
    ...asyncReducers
  });
};

export const injectReducer = (store, { key, reducer}) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};
