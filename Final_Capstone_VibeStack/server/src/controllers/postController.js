// --- POST CONTROLLER (Day 6: Database & Day 8: Cloudinary) ---
const Post = require('../models/Post');

// @desc    Create a new post
// @route   POST /api/posts
exports.createPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    
    // 1. Get the image URL from Multer/Cloudinary (Day 8: File Uploads)
    // req.file is added to the request by the Multer middleware
    const imageUrl = req.file ? req.file.path : null;

    // 2. Create post with author ID (Day 6: CRUD & Modeling)
    // req.user.id comes from our 'protect' middleware
    const post = await Post.create({
      title,
      content,
      imageUrl,
      author: req.user.id
    });

    res.status(201).json({ success: true, data: post });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all posts with author info
// @route   GET /api/posts
exports.getPosts = async (req, res, next) => {
  try {
    // 1. Fetch posts and "Populate" the author's username (Day 6: Advanced DB)
    const posts = await Post.find()
      .populate('author', 'username')
      .sort('-createdAt'); // Sort by newest first

    res.json({ success: true, count: posts.length, data: posts });
  } catch (error) {
    next(error);
  }
};

// @desc    Get post statistics (Day 6: Aggregation)
// @route   GET /api/posts/stats
exports.getPostStats = async (req, res, next) => {
  try {
    // 1. Use Aggregation Pipeline to calculate totals (Day 6)
    const stats = await Post.aggregate([
      {
        $group: {
          _id: null,
          totalPosts: { $sum: 1 },
          totalLikes: { $sum: '$likes' },
          avgLikes: { $avg: '$likes' }
        }
      }
    ]);

    res.json({ success: true, data: stats[0] || {} });
  } catch (error) {
    next(error);
  }
};
