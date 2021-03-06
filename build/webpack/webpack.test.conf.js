
const config = require('../config')


const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const entries = require('./getEntrys')(config.views)


module.exports = {
  entry: entries,
  output: {
    path: config.devPath + '/assets/',
    filename: '[name].js',
    publicPath: '/',
  },
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
          MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          "less-loader"
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg)/,
        loader: 'url-loader',
        options: {
          outputPath: 'images/',
          limit: 5 * 1024,
          name: 'images/[name].[hash:7].[ext]'
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
      }

    ]
  },
}