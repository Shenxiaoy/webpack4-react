const config = require('../config')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const entries = require('./getEntrys')(config.views)
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  entry: entries,
  output: {
    path: config.devPath,
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: config.alias,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      // chunkFilename: "[id].css"
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          !isDev ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
        ]
      },
      {
        test: /\.less$/,
        use: [
          !isDev ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "less-loader"
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/,
        loader: 'url-loader',
        options: {
          outputPath: 'images/',
          limit: 5 * 1024,
          name: '[name].[hash:7].[ext]'
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp3)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 5000,
          name: 'audio/[name].[hash:7].[ext]'
        }
      },

    ]
  },

  // 代码分离，公共js打包
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/][(react)|(antd)|(lodash)|(react\\-router)]/,  // 特殊字符转义用 \\进行转义
          name: 'vendors',  //  name如果不写，表示采用 automaticNameDelimiter 默认生成块的名称(common~user[hash].js),适合单页配置，会引入所有chunks；如果写了chunk名称，需要与htmlWebpcakPlugin配合使用，生成一个chunk，多用于多页面配置；
          chunks: 'initial',  //  1.all:表示node_modules引入的模块；
          priority: 2,  //  模块可以属于多个缓存组，提高缓存组的优先级，默认组优先级为负
          minChunks: 1,  //  共分割前必须共享模块的最小块数
        },
        // common: {
        //   name: 'common',
        //   chunks: 'initial',
        //   priority: 10,
        //   test: /[\\/]node_modules[\\/][(react)|(antd)|(lodash)]/
        // },

        // 主要用于抽取出一个css文件
        // styles: {
        //   name: 'styles',
        //   test: /\.less$/,
        //   chunks: 'all',
        //   enforce: true,
        //   priority: 20,
        // }
      }
    }
  }
}