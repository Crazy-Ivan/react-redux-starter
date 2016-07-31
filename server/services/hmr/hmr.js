import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../../build/webpack.config.js';

const { publicPath } = webpackConfig.output;

export default function(options, imports, register) {

    const log = imports.logger.getOwn('HMR');
    const webserver = imports.webServer;
    const compiler = webpack(webpackConfig);

    log("include webpack-web-middleware");
    webserver.use(webpackDevMiddleware(compiler, { noInfo: true,publicPath: publicPath, stats: { colors: true } }));

    log("include  wabpack-hot-middleware");
    webserver.use(webpackHotMiddleware(compiler, { log: log }));
};
