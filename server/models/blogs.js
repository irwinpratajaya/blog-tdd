const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let blogSchema = Schema({
  admin: String,
  user: String,
  title: String,
  content: String,
  slug: String
}, {
  timestamps: true
})

var blog = mongoose.model('blog', blogSchema );

module.exports = blog
