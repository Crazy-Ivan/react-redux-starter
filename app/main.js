import createStore from './boot/createStore';
import renderApplication from './boot/renderApplication';
import routes from './routes';
import { browserHistory as history } from 'react-router';

const initialState = window.__INITIAL_STATE__;
const mountNode = document.getElementById('root');
const store = createStore(initialState);

renderApplication(mountNode, store, history, routes);

if(__DEV__) {
  if(module.hot) {
    module.hot.accept();
  }
}
