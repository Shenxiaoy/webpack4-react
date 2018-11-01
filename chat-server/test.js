const mongoose = require('mongoose')
const db = mongoose.createConnection('localhost:27017', 'test')
db.on('error', function() {
  console.log('error')
})
db.open('open', function() {
  console.log('open')
})