import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

export default (mountNode, store, history, routes) => {

  history=syncHistoryWithStore(history, store);
  routes=routes(store);

  ReactDOM.render(
    <Provider store={store}>
      <Router history={history} routes={routes}/>
    </Provider>,
    mountNode
  );
};
