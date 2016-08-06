import { compose, applyMiddleware, createStore } from 'redux';
import { makeRootReducer } from '../services/reducers';
import thunkMiddleware from 'redux-thunk';

export default (initialState = {}) => {

  const middleware = [thunkMiddleware];
  const enhancers = [];

  if(__DEV__){
    const devToolsExtension = window.devToolsExtension;
    if(devToolsExtension ) {
      enhancers.push(devToolsExtension());
    }
  }

  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    ));

  store.asyncReducers = {};
  return store;
};
