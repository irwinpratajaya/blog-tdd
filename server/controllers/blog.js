var blog = require('../models/blogs')
var slug = require('slug')

var blogs = {}

blogs.getBlogs = function (req,res,next) {
  blog.find({}).then(function(err, data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

blogs.getBlog = function (req,res,next) {
  blog.find({slug:req.params.slug}).then(function(err, data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

blogs.createBlog = function (req,res,next) {
  blog.create({
    admin: req.body.admin,
    user: req.body.user,
    title: req.body.title,
    content: req.body.content,
    slug: slug(req.body.title).toLowerCase()
  }).then (function (data) {
    res.json(data)
  })
}

blogs.updateBlog = function (req,res,next) {
  blog.update({
    slug: req.params.slug
  },{
    $set: req.body
  }).then(function(err,data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

blogs.deleteBlog = function (req,res,next) {
  blog.find({slug:req.params.slug}).remove(function(err,data) {
    if (err) {
      res.json(err)
    } else {
      res.json (`data id has been deleted`)
    }
  })
}

module.exports = blogs
