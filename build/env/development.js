export default {
    webtool: 'source-map',
    entry: {
        app: [],
        vendor: []
    },
    output: {
        path: '/'
    }
}

if(__DEV__) {
    webpackConfig.webtool = config.compiler.webtool;

    webpackConfig.entry.app.push('webpack-hot-middleware/client');
    webpackConfig.entry.vendor.push('webpack-hot-middleware/client');

    webpackConfig.output.path = '/';

    webpackConfig.plugins.push(
        new webpack.optimize.OccurenceOrderPlugin,
        new webpack.HotModuleReplacementPlugin,
        new webpack.NoErrorsPlugin
    );

}