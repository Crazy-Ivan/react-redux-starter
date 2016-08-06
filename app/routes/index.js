import Layout from 'sharedComponents/Layout/Layout';
import Home from './Home';
import About from './About';

export default (store) => ({
  path: '/',
  component: Layout,
  indexRoute: Home,
  childRoutes: [
    About
  ]
});
