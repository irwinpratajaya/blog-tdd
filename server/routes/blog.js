var express = require('express');
var router = express.Router();
var blogs = require('../controllers/blog')

/* GET home page. */
router.get('/', blogs.getBlogs)

router.get('/:slug', blogs.getBlog)

router.post('/', blogs.createBlog)

router.delete('/:slug', blogs.deleteBlog)

router.put('/:slug', blogs.updateBlog)


module.exports = router;
