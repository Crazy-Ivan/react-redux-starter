import path from 'path';

const resolvePath = dir => path.resolve(__dirname, dir);
const nodeEnv = process.env.NODE_ENV || 'development';

const appConfig = {
    structure: {
        client    : resolvePath('app'),
        dist      : resolvePath('dist')},
    env : {
        '__DEV__' : nodeEnv === 'development',
        '__PROD__': nodeEnv === 'production',
        '__TEST__': nodeEnv === 'test'}
};

export default appConfig;