import fs from 'fs-extra';
import _debug from 'debug';
import webpack from 'webpack';
import appConfig from '../../appConfig.js';
import webpackConfig from '../webpack.config';

const debug = _debug('app:build:bin:compile');
const statsFormat = {
  chunks: false,
  chunkModules: false,
  colors: true
};

function compile() {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig).run((fatalError, stats) => {
      const jsonStats = stats.toJson();
      const hasErrors = !!jsonStats.errors.length;
      const hasWarnings =  !!jsonStats.warnings.length;

      debug('Webpack compile completed');
      debug(stats.toString(statsFormat));

      if(fatalError) {
        debug('Webpack compiler encountered a fatal error.', fatalError);
        reject(fatalError);
      }

      if(hasErrors) {
        debug('Webpack compiler encountered errors.');
        debug(jsonStats.errors.join('\n'));

        reject(stats.errors);
      }

      if(hasWarnings) {
        debug('Webpack compiler encountered warnings.');
        debug(jsonStats.warnings.join('\n'));
      } else {
        debug('No Errors or warnings encountered.');
      }

      resolve(jsonStats);

    });
  });
}

function copyStaticAssets() {
  debug('Copy static assets to dist folder.');
  fs.copySync(appConfig.structure.client.concat('/static') , appConfig.structure.dist);
}

(async function() {
  try {
    debug('Run compiler');
    await compile();
    copyStaticAssets();
  } catch (e) {
    debug('Build process stopped.', e);
    process.exit(1);
  }
})();
