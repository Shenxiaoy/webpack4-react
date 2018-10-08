const webpack = require('webpack')
const webpackDevMiddle = require('webpack-dev-middleware')
const webpackHotMiddle = require('webpack-hot-middleware')
const path = require('path')
const config = require('./config')
const express = require('express')
const devWebpackConfig = require('./webpack/webpack.dev.conf.js')
const utils = require('./utils')

const compiler = webpack(devWebpackConfig)
const app = express()

const devMiddleware = webpackDevMiddle(compiler, {
  publicPath: '/',       //webpack 中publicPath定义相同的内容
  logLevel: 'error',     //如何控制台显示error, waring success,silent 将不再出现，减少构建界面日志信心
  stats: {               // 编译期间和之后显示的格式化统计信息选项
    colors: true,
    chunks: false,
    assets: true
  },
  quiet: false,
  noInfo: true,
})
const hotMiddleware = webpackHotMiddle(compiler, {
  // path : '/__webpack_hmr',
  // log  : false,
})
// force page reload when html-webpack-plugin template changes，重新构建时，构建成功时强制刷新页面
// compiler.plugin('compilation', function (compilation) {
//   compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
//     if (cb) {
//       cb()
//     }
//   })
// })
app.use(require('connect-history-api-fallback')())
app.use(devMiddleware)
app.use(hotMiddleware)

// 设置静态文件目录
function setStatic() {
  app.use('/assets', express.static(path.join(path.resolve(), 'src/assets')))
  app.use('/libs', express.static(path.join(path.resolve(), 'src/assets/libs')))
  app.use('/css', express.static(path.join(path.resolve(), 'src/assets/css')))
}
setStatic()

app.listen(config.port, function() {
  console.log('Listening at http://' + utils.getIpV4() + ':' + config.port + '\n')
})