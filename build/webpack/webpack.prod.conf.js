const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const htmlGenerator = require('./htmlGenerator')
const config = require('../config')
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
  output: {
    path: config.rootPath + '/prod',
    filename: '[name][hash:7].js',
    // chunkFilename: '[name].js',
    publicPath: './'
  },
  mode: 'production',
  plugins: [
    new cleanWebpackPlugin('prod', {
      root: path.join(__dirname, '../../'),
      verbose: true,
      dry: false
    }),
  ].concat(htmlGenerator(config.views))
})

