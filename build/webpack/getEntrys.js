var config = require('../config')
var path = require('path')
function getEntry(views) {
  var newObj = {}

  for(var key in views) {
    newObj[key] = [`${config.devPath}/apps/${key}/index.js`]
    newObj['index'] = [`${config.devPath}/apps/chat/index.js`]
  }
  return newObj
}

module.exports = getEntry
