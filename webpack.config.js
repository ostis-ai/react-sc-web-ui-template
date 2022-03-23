const { merge } = require('webpack-merge');
const baseConfig = require('./webpack/webpack.base');
const initPresets = require('./webpack/presets');

module.exports = (env) => merge(baseConfig, initPresets(env));

// const webpack = require('webpack');
// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const path = require('path');
// const fs = require('fs');
// const dotenv = require('dotenv');
// const outputPath = path.resolve(__dirname, 'assets');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const appDirectory = fs.realpathSync(process.cwd());
// const resolveAppPath = (relativePath) => path.resolve(appDirectory, relativePath);
// const host = process.env.HOST || 'localhost';

// process.env.NODE_ENV = 'development';

// module.exports = {
//     mode: 'none',
//     entry: {
//       app: './src/index.ts'
//     },
//     module: {
//       rules: [
//         {
//           test: /\.tsx?$/,
//           use: 'ts-loader',
//           exclude: /node_modules/
//         },
//         {
//           test: /\.css$/,
//           use: [ 'style-loader', 'css-loader' ]
//         }
//       ]
//     },
//     plugins: [
//       new MonacoWebpackPlugin({
//         "languages": [],
//         "features": [
//           'bracketMatching', 'caretOperations', 'clipboard', 'codelens', 'colorDetector', 'comment', 'contextmenu',
//           'coreCommands', 'cursorUndo', 'find', 'folding', 'format', 'gotoLine', 'hover', 'inPlaceReplace', 'inspectTokens', 'linesOperations', 'links',
//           'parameterHints', 'rename', 'smartSelect', 'snippets', 'suggest', 'wordHighlighter', 'wordOperations'
//         ]
//       }),
//       new CleanWebpackPlugin()
//     ],
//     resolve: {
//       extensions: [ '.tsx', '.ts', '.js', '.css' ],
//       fallback: {
//         fs: false
//       }
//     },
//     devServer: {
//         contentBase: resolveAppPath('src'),
//         compress: true,
//         hot: true,
//         host,
//         port: 3003,
//         historyApiFallback: true,
//         publicPath: '/',
//     },
//     output: {
//       filename: 'bundle.js',
//       path: outputPath,
//       libraryTarget: 'var',
//       library: 'SCsEditor'
//     },
//   };
