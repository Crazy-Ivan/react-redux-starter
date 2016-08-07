import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

export const renderApp = (mountNode, store, history, routes) => {

  history=syncHistoryWithStore(history, store);
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history} routes={routes}/>
    </Provider>,
    mountNode
  );
};

export const unmountRenderedApp = (mountNode) => {
  ReactDOM.unmountComponentAtNode(mountNode);
};
