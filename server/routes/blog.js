var express = require('express');
var router = express.Router();
var blogs = require('../controllers/blog')

/* GET home page. */
router.get('/', blogs.getBlogs)

router.get('/:id', blogs.getBlog)

router.post('/', blogs.createBlog)

router.delete('/:id', blogs.deleteBlog)

router.put('/:id', blogs.updateBlog)


module.exports = router;
