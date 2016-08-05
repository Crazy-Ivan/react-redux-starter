import appConfig from './../../appConfig.js';
import commonConfig from './common.js';
import developmentConfig from './env/development.js';
import productionConfig from './env/production.js';
import testConfig from './env/test.js';

const {__DEV__, __PROD__, __TEST__} = appConfig.env;

function mergeConfigCollections(firstCollection, secondCollection) {
  let updatedItemsCollection = firstCollection.map(firstItem => {
    let secondItem = secondCollection.find((secondItem) => firstItem.packagePath == secondItem.packagePath);
    return Object.assign(firstItem, secondItem);
  });

  let newItemsCollection = secondCollection.filter((secondItem) => {
    return !firstCollection.some(firstItem => secondItem.packagePath == firstItem.packagePath);
  });

  return updatedItemsCollection.concat(newItemsCollection);
}

let serverConfig;

if (__DEV__) {
  serverConfig = mergeConfigCollections(commonConfig, developmentConfig);
} else if (__PROD__) {
  serverConfig = mergeConfigCollections(commonConfig, productionConfig);
} else if (__TEST__) {
  serverConfig = mergeConfigCollections(commonConfig, testConfig);
}

export default serverConfig;
