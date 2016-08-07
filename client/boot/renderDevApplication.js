import React from 'react';
import ReactDOM from 'react-dom';
import Redbox from 'redbox-react';

export const renderDevApplication = (renderApplication) => {
  return (mountNode, store, history, routes) => {
    try {
      renderApplication(mountNode, store, history, routes);
    } catch(error) {
      ReactDOM.render(<Redbox error={error}/>, mountNode);
    }
  };
};
