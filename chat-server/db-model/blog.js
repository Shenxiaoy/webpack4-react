const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{body: String, date: Date}],
  date: {type: Date, default: Date.now},
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  },
  ary: Array
})

const BlogModel = mongoose.model('blog', blogSchema)
const blogModel = new BlogModel({
  title: 'ok',
  body: 'long long long time ...',
  author: 'sxy'
})
// blogModel.save()

module.exports = BlogModel



