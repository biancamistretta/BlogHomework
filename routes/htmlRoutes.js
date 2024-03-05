const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

router.get('/', (req, res) => res.render('home'));
router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dashboard', { user: req.user }));
router.get('/login', (req, res) => res.render('login'));
router.get('/signup', (req, res) => res.render('signup'));

module.exports = router;
