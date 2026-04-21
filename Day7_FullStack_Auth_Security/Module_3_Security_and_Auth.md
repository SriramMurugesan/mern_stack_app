# Module 3: Security & Auth (JWT & Bcrypt) 🔐

In professional apps, we don't just "save" passwords. We protect them using **Hashing**. And we don't "remember" users with cookies; we use **JWTs**.

---

## 1. Password Hashing with Bcrypt

**Golden Rule**: Never store plain-text passwords in a database. If your DB is hacked, every user's account is compromised.

### 📦 Install
```bash
npm install bcryptjs
```

### 🛠️ Usage (Hasing on save):
```javascript
const bcrypt = require('bcryptjs');

// Registering a user
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);

// Save hashedPassword to DB
```

### 🛠️ Usage (Verification on login):
```javascript
const isMatch = await bcrypt.compare(enteredPassword, storedPasswordHash);
```

---

## 2. JWT (JSON Web Token)

A JWT is a secure, encoded string that proves a user is logged in.

### 📦 Install
```bash
npm install jsonwebtoken
```

### 🛠️ Creating a Token (Login):
```javascript
const jwt = require('jsonwebtoken');

const token = jwt.sign(
  { id: user._id }, 
  process.env.JWT_SECRET, 
  { expiresIn: '30d' }
);
```

---

## 3. Protecting Routes (Middleware)

We create a middleware to check if the request has a valid token in the headers.

### `src/middleware/authMiddleware.js`:
```javascript
const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith('Bearer')) {
    try {
      token = token.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "No token, authorization denied" });
  }
};

module.exports = { protect };
```

---

## 4. Using the Protection
```javascript
const { protect } = require('./middleware/authMiddleware');

app.get('/api/profile', protect, (req, res) => {
  res.json({ message: "Welcome to your secret profile!" });
});
```

---

## 🎯 Task for Students
1. Use `bcrypt` to hash a password before saving a test user.
2. Generate a JWT upon successful "Login".
3. Use a tool (Thunder Client/Postman) to send the token in the `Authorization` header as `Bearer <TOKEN>` and access a protected route.
