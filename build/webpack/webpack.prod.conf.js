const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const htmlGenerator = require('./htmlGenerator')
const CopyWebpackPlugin = require('copy-webpack-plugin')
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

    /*
    * 1、在生产环境中的配置中，DefinePlugin 可以减少冗余，缩减 bundle 大小；
    * 2、还要注意，任何位于 /src 的本地代码都可以关联到 process.env.NODE_ENV 环境变量，使用process.env.NODE_ENV也是有效的。
    * */
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new CopyWebpackPlugin([
      {
        from:config.devPath + '/assets',
        to: config.rootPath + '/prod/assets',
        // toType: 'dir',
        ignore: ['.*'],
      },
    ]),

  ].concat(htmlGenerator(config.views))
})

