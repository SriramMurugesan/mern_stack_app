// --- POST ROUTES (Day 4: Routing, Day 7: Security, Day 8: File Uploads) ---
const express = require('express');
const router = express.Router();
const multer = require('multer');

// --- CLOUDINARY CONFIG (Day 8: Advanced Vibe) ---
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configuring Cloudinary with API keys (stored in .env - Day 4-8)
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Setting up the storage engine for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'vibestack_uploads',
    allowedFormats: ['jpg', 'png', 'jpeg'],
  },
});

const upload = multer({ storage: storage });

// --- CONTROLLER IMPORTS ---
const { createPost, getPosts, getPostStats } = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');

// --- ROUTE DEFINITIONS ---

// GET /api/posts: Publicly view all posts (Day 4-6)
router.get('/', getPosts);

// GET /api/posts/stats: Viewing aggregate data (Day 6)
router.get('/stats', getPostStats);

// POST /api/posts: Create post (Protected by JWT - Day 7, Handles Upload - Day 8)
// 'image' is the field name we'll send from the React frontend
router.post('/', protect, upload.single('image'), createPost);

module.exports = router;
