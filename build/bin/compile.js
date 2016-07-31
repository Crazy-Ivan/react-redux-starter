import fs from 'fs-extra';
import _debug from 'debug';
import webpack from 'webpack';
import appConfig from '../../appConfig.js';
import webpackConfig from '../webpack.config';
import config from '../build.config';

const debug = _debug('app:bin:compile');
const statsFormat = {
  chunks: false,
  chunkModules: false,
  colors: true
};

async function compile() {
  await webpack(webpackConfig).run((fatalError, stats) => {
    const jsonStats = stats.toJson();
    const hasErrors = !!jsonStats.errors.length;
    const hasWarnings =  !!jsonStats.warnings.length;

    debug('Webpack compile completed');
    debug(stats.toString(statsFormat));

    if(fatalError) {
      debug('Webpack compiler encountered a fatal error.', fatalError);
      throw new Error(fatalError);
    }

    if(hasErrors) {
      debug('Webpack compiler encountered errors.');
      debug(jsonStats.errors.join('\n'));


      throw new Error(stats.errors);
    }

    if(hasWarnings) {
      debug('Webpack compiler encountered warnings.');
      debug(jsonStats.warnings.join('\n'));
    } else {
      debug('No Errors or warnings encountered.')
    }

    return jsonStats;

  })
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
})()
