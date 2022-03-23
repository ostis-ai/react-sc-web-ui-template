const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    template: path.resolve(process.cwd(), 'public/index.html'),
    filename: 'index.html',
};

module.exports = new HtmlWebpackPlugin(config);
