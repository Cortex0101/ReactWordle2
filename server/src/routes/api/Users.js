const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/UsersController');
const authenticateToken = require('../middleware/AuthMiddleware');

// Route: GET /api/users/:UserID/stats
router.get('/:UserID/stats', authenticateToken, usersController.getUserStats);

module.exports = router;