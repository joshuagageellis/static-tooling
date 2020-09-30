const path = require('path');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _StyleLintPlugin = require('stylelint-webpack-plugin');
const _HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
// const _CompressionPlugin = require('compression-webpack-plugin');

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: '[name].bundle.css',
  chunkFilename: '[id].css'
});

const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, 'stylelint.config.js'),
  context: path.resolve(__dirname, '../src/scss'),
  files: '**/*.scss',
  failOnError: false,
  quiet: false,
});

const HtmlCriticalWebpackPlugin = new _HtmlCriticalWebpackPlugin({
  base: path.resolve(__dirname, '../dist'),
  src: path.resolve(__dirname, '../dist/index.html'),
  dest: path.resolve(__dirname, '../dist/index-critical.html'),
  inline: true,
  minify: true,
  extract: true,
  width: 375,
  height: 565,
  penthouse: {
    blockJSRequests: false,
  }
});


// const CompressionPlugin = new _CompressionPlugin({
//   test: /\.js(\?.*)?$/i
// });

module.exports = {
  MiniCssExtractPlugin: MiniCssExtractPlugin,
  StyleLintPlugin: StyleLintPlugin,
  HtmlCriticalWebpackPlugin: HtmlCriticalWebpackPlugin
  // CompressionPlugin: CompressionPlugin
};
