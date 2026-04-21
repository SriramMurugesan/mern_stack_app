// --- AUTH CONTROLLER (Day 7: Security & Auth Logic) ---
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @desc    Register a new user
// @route   POST /api/auth/register
exports.registerUser = async (req, res, next) => {
  try {
    // 1. Get input data from the request body (Day 4: Req/Res Cycle)
    const { username, password } = req.body;

    // 2. Check if user already exists (Day 6: DB Operations)
    const userExists = await User.findOne({ username });
    if (userExists) {
      res.status(400); // Bad Request
      throw new Error('User already exists');
    }

    // 3. Password Hashing (Day 7: Security Best Practices)
    // We generate a "salt" (random Noise) to make the hash ultra-secure
    const salt = await bcrypt.genSalt(10);
    // We mix the password with the salt to get a hashed version
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Create and save the user to MongoDB (Day 6: CRUD)
    const user = await User.create({
      username,
      password: hashedPassword,
    });

    // 5. Send success response (Day 4)
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
    });
  } catch (error) {
    // 6. Give the error to our Global Error Handler (Day 7)
    next(error);
  }
};

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
exports.loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // 1. Find user by username
    const user = await User.findOne({ username });

    // 2. Compare the entered password with the hashed password in DB (Day 7: bcrypt.compare)
    if (user && (await bcrypt.compare(password, user.password))) {
      // 3. If correct, generate a JSON Web Token (Day 7: JWT)
      const token = jwt.sign(
        { id: user._id }, 
        process.env.JWT_SECRET, 
        { expiresIn: '30d' } // Token lasts for 30 days
      );

      // 4. Send the token back to the React client (Day 7: Full Stack Bridge)
      res.json({
        success: true,
        token,
        user: { id: user._id, username: user.username }
      });
    } else {
      // 5. If credentials are wrong, throw error
      res.status(401); // Unauthorized
      throw new Error('Invalid username or password');
    }
  } catch (error) {
    next(error);
  }
};
