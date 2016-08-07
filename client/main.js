import createStore from 'boot/createStore';
import { renderApp, unmountRenderedApp } from 'boot/renderApplication';
import routes from 'routes';
import { browserHistory as history } from 'react-router';
import { configReducerService } from 'services/reducer';

const initialState = window.__INITIAL_STATE__;
const mountNode = document.getElementById('root');
const store = createStore(initialState);

let render = renderApp;

configReducerService(store);

if(__DEV__) {
  render = require('boot/renderDevApplication').renderDevApplication(render);

  if(module.hot) {
    module.hot.accept('./routes/index', () => {
      const updatedRoutes = require('routes').default;
      unmountRenderedApp(mountNode);
      render(mountNode, store, history, updatedRoutes);
    });
  }
}

render(mountNode, store, history, routes);
