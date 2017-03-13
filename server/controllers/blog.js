var blog = require('../models/blogs')

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
  blog.find({_id:req.params.id}).then(function(err, data) {
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
    content: req.body.content
  }).then (function (data) {
    res.json(data)
  })
}

blogs.updateBlog = function (req,res,next) {
  blog.update({
    _id: req.params.id
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
  blog.find({_id:req.params.id}).remove(function(err,data) {
    if (err) {
      res.json(err)
    } else {
      res.json (`data id has been deleted`)
    }
  })
}

module.exports = blogs
