const { Post, User, Comment } = require('../models');

const postController = {
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.findAll({ include: [{ model: User }] });
      res.render('home', { posts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getPostById: async (req, res) => {
    try {
      const post = await Post.findByPk(req.params.id, { include: [{ model: User }, { model: Comment, include: [User] }] });
      if (!post) {
        res.status(404).json({ message: 'Post not found' });
      } else {
        res.render('post', { post });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  createPost: async (req, res) => {
    try {
      const { title, content } = req.body;
      const userId = req.user.id; 
      const post = await Post.create({ title, content, userId });
      res.redirect('/dashboard');
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  updatePost: async (req, res) => {
    try {
      const { title, content } = req.body;
      const postId = req.params.id;
      await Post.update({ title, content }, { where: { id: postId } });
      res.redirect('/dashboard');
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  deletePost: async (req, res) => {
    try {
      const postId = req.params.id;
      await Post.destroy({ where: { id: postId } });
      res.redirect('/dashboard');
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = postController;
