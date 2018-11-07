const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/njx', {useNewUrlParser: true})

const db = mongoose.connection
const Schema = mongoose.Schema
const Blog = require('./db-model/blog')
db.on('error', function() {
  console.log('error')
})
db.once('open', function() {
  console.log('open')
})

// Blog.create({title: 'aa'}, ()=>{})
// Blog.updateOne({title: 'sxy'}, {'$push': {ary: 10}}, (error, data) => {
//   console.log(data, '=====')
// })




