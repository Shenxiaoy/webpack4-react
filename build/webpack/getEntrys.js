var config = require('../config')
var path = require('path')
function getEntry(views) {
  var newObj = {}

  for(var key in views) {
    newObj[key] = [`${config.devPath}/apps/${key}/index.js`]
    // newObj[key] = ['webpack-hot-middleware/client?noInfo=true&reload=true&quiet=true', `${config.devPath}/apps/${key}/index.js`]
  }
  return newObj
}

module.exports = getEntry
