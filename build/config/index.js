const path = require('path')

const devPath = path.join(__dirname, '../../src')
const rootPath = path.join(__dirname, '/../../')



module.exports = {
  devPath,
  rootPath,
  views: require('../../src/view/view'),
  dev: {
    assetsRoot: ''
  },
  build: {

  }
}