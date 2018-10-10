const path = require('path')

const devPath = path.join(__dirname, '../../src')
const rootPath = path.join(__dirname, '/../../')



module.exports = {
  port: 9901,
  devPath,
  rootPath,
  views: require('../../src/view/view'),
  alias: {
    'utils': path.resolve(devPath, 'utils')
  },
  dev: {
    assetsRoot: ''
  },
  build: {

  }
}