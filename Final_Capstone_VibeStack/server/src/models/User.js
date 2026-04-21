// --- USER MODEL (Day 6: Database & Schema Design) ---
// Importing mongoose to define the data structure
const mongoose = require('mongoose');

// Defining the User Schema - this is the "blueprint" for our user data
const userSchema = new mongoose.Schema({
  // username: must be a string, is required, and must be unique in the DB
  username: { 
    type: String, 
    required: [true, 'Please add a username'], 
    unique: true,
    trim: true // removes extra spaces
  },
  // password: saved as a hashed string (Day 7: Security)
  password: { 
    type: String, 
    required: [true, 'Please add a password'],
    minlength: 6 
  },
  // profilePic: stores the URL from Cloudinary (Day 8: Advanced)
  profilePic: { 
    type: String, 
    default: 'https://via.placeholder.com/150' 
  }
}, { 
  // Automatically adds 'createdAt' and 'updatedAt' fields (Day 6)
  timestamps: true 
});

// Exporting the model so it can be used in controllers
module.exports = mongoose.model('User', userSchema);
