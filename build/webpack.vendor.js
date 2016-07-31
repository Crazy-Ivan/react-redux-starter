import pkg from './../package.json';
import _debug from 'debug';

const debug = _debug('app:webpack:vendor');

const vendor = [
    'history',
    'react',
    'react-redux',
    'react-router',
    'react-router-redux',
    'redux'
];
//
vendor.filter(dep => {
    if(pkg.dependencies[dep]) return true;

    debug(`Package "${dep}" was not found as an npm dependency in package.json so it wont't be included in the webpack bundle.
    Consider removing it from vendor dependecies in ~/build/wepback.vendor.js`);
});


export default vendor;