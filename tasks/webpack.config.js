const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  devtool: 'inline-source-map',
  module: {
    rules: [
      loaders.CSSLoader,
      loaders.JSLoader,
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    plugins.MiniCssExtractPlugin,
    plugins.StyleLintPlugin,
    plugins.HtmlCriticalWebpackPlugin,
    plugins.ESLintPlugin
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js'
  }
};
