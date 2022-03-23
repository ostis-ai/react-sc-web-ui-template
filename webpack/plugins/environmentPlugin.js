const dotenv = require('dotenv');
const webpack = require('webpack');

// TODO: Как тут используется dotEnv?
module.exports = new webpack.EnvironmentPlugin(Object.keys(dotenv.config().parsed || {}));
