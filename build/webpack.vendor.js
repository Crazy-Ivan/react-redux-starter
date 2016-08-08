import pkg from './../package.json';
import _debug from 'debug';

const debug = _debug('app:build:vendor');

let vendor = [
  'react',
  'react-redux',
  'react-router',
  'react-router-redux',
  'redux'
];

vendor = vendor.filter(dep => {
  if(pkg.dependencies[dep]) return true;

  debug(`Package "${dep}" was not found as an npm dependency in package.json so it wont't be included in the webpack bundle.
    Consider removing it from vendor dependecies in ~/build/wepback.vendor.js`);
});
export default vendor;
