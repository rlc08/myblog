const express = require('express');
const router = express.Router();
const {
  getUserPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
} = require('../controller/posts');

// Get posts for a specific user
router.get('/:userid/posts', getUserPosts);

// Create a new post for a specific user
router.post('/:userid/posts', createPost);

// Get a specific post for a specific user
router.get('/:userid/posts/:postId', getPost);

// Update a specific post for a specific user
router.put('/:userid/posts/:postId', updatePost);

// Delete a specific post for a specific user
router.delete('/:userId/posts/:postId', deletePost);

module.exports = router;
