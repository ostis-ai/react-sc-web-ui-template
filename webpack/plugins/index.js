const { IS_DEV } = require('../env');
const htmlWebpackPlugin = require('./htmlWebpackPlugin');
const progressPlugin = require('./progressPlugin');
const definePlugin = require('./definePlugin');
const reactRefreshWebpackPlugin = require('./reactRefreshWebpackPlugin');
const forkTsCheckerWebpackPlugin = require('./forkTsCheckerWebpackPlugin');
const environmentPlugin = require('./environmentPlugin');
const cleanWebpackPlugin = require('./cleanWebpackPlugin');
const monacoWebpackPlugin = require('./monacoWebpackPlugin')

module.exports = [
    htmlWebpackPlugin,
    progressPlugin,
    definePlugin,
    forkTsCheckerWebpackPlugin,
    environmentPlugin,
    cleanWebpackPlugin,
    monacoWebpackPlugin,
    IS_DEV && reactRefreshWebpackPlugin,
].filter(Boolean);
