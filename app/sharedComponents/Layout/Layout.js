import React from 'react';

const Layout = ({ children }) => (
  <div>
    <h1>Layout</h1>
    <div>{ children }</div>
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default Layout;
