import React from 'react';
import 'styles/mainStyle.scss';

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
