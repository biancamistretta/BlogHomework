const express = require('express');
const router = express.Router();

const htmlRoutes = require('./htmlRoutes');
const apiRoutes = require('./apiRoutes');

// HTML routes
router.use('/', htmlRoutes);

// API routes
router.use('/api', apiRoutes);

module.exports = router;
