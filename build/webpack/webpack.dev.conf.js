const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const htmlGenerator = require('./htmlGenerator')
const config = require('../config')

Object.keys(baseWebpackConfig.entry).forEach(function(name) {
  baseWebpackConfig.entry[name].push('webpack-hot-middleware/client?noInfo=true&reload=true&quiet=true')
})

module.exports = merge(baseWebpackConfig, {
  devtool: '#eval-source-map',
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // new FriendlyErrorsPlugin(),
  ].concat(htmlGenerator(config.views))
})

