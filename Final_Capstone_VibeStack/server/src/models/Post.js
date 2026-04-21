// --- POST MODEL (Day 6: Database & Data Operations) ---
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  // title: The subject of the post
  title: { 
    type: String, 
    required: [true, 'Post must have a title'],
    trim: true
  },
  // content: The main text of the post
  content: { 
    type: String, 
    required: [true, 'Post must have content'] 
  },
  // imageUrl: Optional image hosted on Cloudinary (Day 8)
  imageUrl: { 
    type: String 
  },
  // author: A reference to the User who created it (Day 6: Modeling)
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // likes: Simple numeric field for testing aggregation (Day 6)
  likes: {
    type: Number,
    default: 0
  }
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Post', postSchema);
