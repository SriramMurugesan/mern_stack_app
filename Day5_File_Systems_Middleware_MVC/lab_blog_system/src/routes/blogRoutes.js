const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Define Routes
router.get('/', blogController.getAllPosts);
router.get('/post/:id', blogController.getPostById);

module.exports = router;
