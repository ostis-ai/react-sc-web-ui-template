const { IS_PROD } = require('./env');
const TerserWebpackPlugin = require('terser-webpack-plugin');

// На деве необходимо выделять runtimeChunk иначе не будет работать hot-update
// Если выделять на проде, то микрофронт работать не будет
const runtimeChunk = IS_PROD ? {} : { runtimeChunk: 'single' };

module.exports = {
  minimize: IS_PROD,
  minimizer: [new TerserWebpackPlugin({ extractComments: false })],
  ...runtimeChunk,
  moduleIds: IS_PROD ? 'deterministic' : 'natural',
};
