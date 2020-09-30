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
module.exports = {
  JSLoader: JSLoader
};

const ESLintLoader = {
  test: /\.js$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: {
    loader: 'eslint-loader',
    options: {
      configFile: __dirname + '/.eslintrc'
    },
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
        config: {
          path: __dirname + '/postcss.config.js'
        }
      }
    }, {
        loader: 'sass-loader',
        options: {
          sourceMap: false,
          outputStyle: 'nested',
          implementation: require('node-sass')
        }
    }, {
      loader: 'sass-resources-loader',
      options: {
        sourceMap: false,
        resources:  './src/scss/**/*.scss',
      }
    },
  ],
};

module.exports = {
  JSLoader: JSLoader,
  ESLintLoader: ESLintLoader,
  CSSLoader: CSSLoader,
};
