import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import _debug from 'debug';
import appConfig from './../appConfig.js';

import vendor from './webpack.vendor.js';

const { __DEV__, __PROD__ } = appConfig.env;
const debug = _debug('app:build:config');

debug('Create webpack configuration');

const webpackConfig = {
  target: 'web',
  resolve: {
    root: appConfig.structure.client,
    extensions: ['', '.js', '.jsx', 'json']
  },
  entry: {
    app: [appConfig.structure.client.concat('/main.js')],
    vendor: vendor
  },
  output: {
    filename: '[name].[hash].js',
    path: appConfig.structure.dist,
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin(appConfig.env),
    new HtmlWebpackPlugin({
      template: appConfig.structure.client.concat('/index.html'),
      minify: {
        collapseWhitespace: true
      }
    })],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        cacheDirectory: true,
        plugins: ['transform-runtime'],
        presets: ['es2015', 'react', 'stage-0']
      }
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  }

};

if(__DEV__) {
  webpackConfig.devtool = '#source-map';
  webpackConfig.entry.app.push('webpack-hot-middleware/client?noInfo=true');
  webpackConfig.entry.vendor.push('webpack-hot-middleware/client?noInfo=true');
  webpackConfig.output.path = '/';
  webpackConfig.plugins.push(
    new webpack.optimize.OccurenceOrderPlugin,
    new webpack.HotModuleReplacementPlugin,
    new webpack.NoErrorsPlugin
  );
}

if(__PROD__) {
  webpackConfig.plugins.push(
    new webpack.optimize.OccurenceOrderPlugin,
    new webpack.optimize.DedupePlugin,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    })
  );
}

export default webpackConfig;
