const { resolve } = require('path');
const merge = require('webpack-merge');

const { config } = require('./webpack.common');

const DEV_DIST = resolve(__dirname, '..', 'dist');

module.exports = merge(config, {
  mode: 'development',
  profile: false,
  devtool: 'inline-source-map',

  entry: {
    app: ['react-hot-loader/patch']
  },

  output: {
    path: DEV_DIST,
    pathinfo: true,
    filename: '[name].dev.js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },

  devServer: {
    contentBase: resolve(__dirname, 'public'),
    compress: true,
    port: process.env.DEV_PORT || 3100,
    host: process.env.DEV_HOST || '0.0.0.0',
    hot: true,
    noInfo: true,
    historyApiFallback: true,
    overlay: {
      warning: false,
      errors: true,
    },
  },
})
