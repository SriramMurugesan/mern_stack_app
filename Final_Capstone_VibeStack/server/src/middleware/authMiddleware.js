// --- AUTH MIDDLEWARE (Day 7: Security & Protected Routes) ---
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// This function checks if a request has a valid JWT token
const protect = async (req, res, next) => {
  let token;

  // 1. Check if Authorization header exists and starts with 'Bearer'
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // 2. Extract the token from the string "Bearer <token>"
      token = req.headers.authorization.split(' ')[1];

      // 3. Verify the token using our secret key
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // 4. Find the user from the DB and attach it to the 'req' object (Day 6-7 Integration)
      // .select('-password') ensures we don't carry the sensitive password around
      req.user = await User.findById(decoded.id).select('-password');

      // 5. Move to the next function in the route chain
      next();
    } catch (error) {
      // If verification fails, send 401 Unauthorized
      res.status(401);
      next(new Error('Not authorized, token failed'));
    }
  }

  // If no token was found at all
  if (!token) {
    res.status(401);
    next(new Error('Not authorized, no token'));
  }
};

module.exports = { protect };
