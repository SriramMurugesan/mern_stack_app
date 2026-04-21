// --- AUTH ROUTES (Day 4: Routing) ---
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Define the endpoints and link them to controller logic
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
