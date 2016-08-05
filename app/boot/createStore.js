import { createStore } from 'redux';
import { makeRootReducer } from '../services/reducers';

export default (initialState = {}) => {

  const store = createStore(makeRootReducer(), initialState);

  store.asyncReducers = {};
  return store;
};
