# Module 4: Lab – Building a Secure Auth System 🔐

In this lab, you will build a complete User Authentication system. You will create the backend logic for registration and login, and a simple React interface to interact with it.

## Project Structure
```text
lab_secure_auth/
├── server/
│   ├── src/
│   │   ├── models/User.js
│   │   ├── controllers/authController.js
│   │   ├── middleware/authMiddleware.js
│   ├── .env
│   ├── app.js
└── client/
    ├── src/
    │   ├── components/Login.js
    │   ├── App.js
```

---

## Phase 1: The User Model
In `server/src/models/User.js`:
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
```

---

## Phase 2: Registration & Login Logic
In `server/src/controllers/authController.js`:
```javascript
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { username, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  
  const user = await User.create({ username, password: hashedPassword });
  res.status(201).json({ message: "User registered!" });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
```

---

## Phase 3: The Frontend Bridge
In `client/src/components/Login.js`:
```javascript
import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      localStorage.setItem('token', data.token);
      alert("Login Successful!");
    } catch (err) {
      alert("Login Failed!");
    }
  };

  return (
    <div>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
```

---

## 🚀 Advanced Challenges
1. **Validation**: Use `express-validator` to ensure the password is at least 6 characters long.
2. **Persistence**: In React, use the stored token to fetch a "Private Profile" from the backend.
3. **Log Out**: Implement a logout feature that clears the token from `localStorage`.
