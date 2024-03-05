const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const userController = require('../controllers/userController');

// API routes for posts
router.get('/posts', postController.getAllPosts);
router.get('/posts/:id', postController.getPostById);
router.post('/posts', postController.createPost);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

// API routes for user
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/logout', userController.logout);

module.exports = router;
