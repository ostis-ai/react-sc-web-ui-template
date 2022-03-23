const { NODE_ENV, IS_DEV } = require('./env');
const plugins = require('./plugins');
const devServer = require('./devServer');
const rules = require('./rules');
const optimization = require('./optimization');
const alias = require('./alias');
const { relativeRoot } = require('./utils');

module.exports = {
    mode: NODE_ENV,
    resolve: {
        alias,
        // TODO: Убрать css
        extensions: ['.js', '.ts', '.tsx', '.css'],
    },
    entry: relativeRoot('src/index.ts'),
    output: {
        path: relativeRoot('build'),
        filename: IS_DEV ? '[name].js' : '[name].[contenthash].js',
        publicPath: 'auto',
    },
    optimization,
    devServer,
    devtool: IS_DEV ? 'inline-source-map' : 'hidden-nosources-source-map',
    plugins,
    module: {
        rules,
    },
};
