import createStore from './boot/createStore';
import renderApplication from './boot/renderApplication';

const initialState = window.__INITIAL_STATE__;
const mountNode = document.getElementById('root');
const store = createStore(initialState);

renderApplication(mountNode, store);

if(__DEV__) {
  if(module.hot) {
    module.hot.accept();
  }
}
