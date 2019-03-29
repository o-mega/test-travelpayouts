const merge = require('webpack-merge');
const { DefinePlugin } = require('webpack');
const UglifyJs = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { config } = require('./webpack.common')
const extractSass = new ExtractTextPlugin({
  filename: "[name].css",
})


module.exports = merge(config, {
  mode: 'production',

  stats: {
    colors: false,
    hash: true,
    timings: true,
    assets: true,
    chunks: true,
    chunkModules: true,
    modules: true,
    children: true,
  },

  optimization: {
    minimizer: [
      new UglifyJs({
        sourceMap: false,
        uglifyOptions: {
          compress: {
            inline: false
          }
        }
      })
    ],
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor_app',
          chunks: 'all',
          minChunks: 2
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },

  plugins: [
    new BundleAnalyzerPlugin(),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
    }),
    extractSass,
  ],
})
