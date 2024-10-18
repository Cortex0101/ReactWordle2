const express = require('express');
const router = express.Router();
const AuthController = require('../../controllers/AuthController');
const authenticateToken = require('../middleware/AuthMiddleware');

// Route: GET /api/users/:UserID/stats
router.get('/guest', AuthController.generateGuestUser); // No authentication required

module.exports = router;