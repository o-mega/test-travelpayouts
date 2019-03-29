const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');


const SOURCES = resolve(__dirname, 'src');
const DIST = resolve(__dirname, 'dist');


const config = {
  context: SOURCES,
  target: 'web',

  entry: {
    app: ['@babel/polyfill', 'index']
  },

  output: {
    path: DIST,
    filename: '[name].js',
    publicPath: '/dist/',
  },

  resolve: {
    modules: [
      'node_modules',
      SOURCES,
    ],
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        ]
      }
    ],
  },

  plugins: [
    new HtmlPlugin({
      title: 'Test app for Travelpayouts',
      favicon: 'favicon.ico',
      template: 'index.html',
    })
  ],
}

module.exports = {
  config,
  DIST,
  SOURCES,
}
