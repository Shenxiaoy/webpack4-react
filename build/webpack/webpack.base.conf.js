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
    alias: {},
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
        common: {
          test: /[\\/]node_modules[\\/]/,
          name: 'common',
          chunks: 'initial',
          priority: 2,
          minChunks: 2,
        },
        // vendor: {
        //   name: 'vendor',
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