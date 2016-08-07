import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

let store;
let asyncReducers = [];

export const configReducerService = (storeInstance) => {
  store = storeInstance;
};

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    routing: routing,
    ...asyncReducers
  });
};

export const injectReducer = (key, reducer) => {
  if(!store) {
    throw new Error('Service should be configured before you could call "injectReducer" method. Use "configReducerService" method to configure service.');
  }

  asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(asyncReducers));
};
