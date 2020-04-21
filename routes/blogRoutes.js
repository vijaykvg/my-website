const express = require('express');
const router = express.Router();

// importing controller file
const BlogController = require('./../controllers/blogController');

// assigning functions to request
router.get('/', BlogController.getBlogPage);

router.get('/:slug', BlogController.getSpecificBlog);

router.post('/', BlogController.setNewBlog);

// exporting module to access from another module
module.exports = router;