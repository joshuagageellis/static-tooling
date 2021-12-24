const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      env: {
        production: {
          presets: ['minify']
        }
      }
    }
  }
};

const CSSLoader = {
  test: /\.scss$/,
  exclude: /node_modules/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: __dirname + '/../../../dist/css/'
      }
    }, {
      loader: 'css-loader',
      options: {
        sourceMap: false
      }
    }, {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          config: __dirname + '/postcss.config.js'
        }
      }
    }, {
        loader: 'sass-loader',
        options: {
          sourceMap: false,
          // Prefer dart sass.
          implementation: require('sass')
        }
    }
  ],
};

module.exports = {
  JSLoader: JSLoader,
  CSSLoader: CSSLoader,
};
