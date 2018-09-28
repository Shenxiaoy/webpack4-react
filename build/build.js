const webpack = require('webpack')
const ora = require('ora')
const path = require('path')
const prodConfig = require('./webpack/webpack.prod.conf')

const spinner = new ora('Webpack is compiling ...\n')
spinner.color = 'green'
spinner.start()

const compiler = webpack(prodConfig)

compiler.run(function(err, stats) {
  if(err) {
    console.log('Webpack compile failure')
  } else {
    spinner.stop()
    process.stdout.write(stats.toString({
      colors       : true,
      modules      : false,
      children     : false,
      chunks       : false,
      chunkModules : false
    }) + '\n\n')
    console.log('Webpack compiler finished successfully！ See ./prod.')
  }

})