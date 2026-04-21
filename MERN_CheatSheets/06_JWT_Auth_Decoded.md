# 06: JWT Auth Decoded 🔐

**JWT (JSON Web Token)** is like a **digital ID card**. Once you log in, the server gives you this card, and you show it every time you want to access a private page.

---

## 1. How it works (The 3-Step Dance)
1. **Login**: You send your username/password.
2. **Issue**: The server checks them and sends back a "Token" (a long string of characters).
3. **Verify**: For every request after that, you send the Token in the **Header**. The server "unlocks" it to see who you are.

---

## 2. What's inside a Token?
A JWT has three parts separated by dots (`.`):
- **Header**: Tells the server what kind of token it is.
- **Payload**: Contains your data (e.g., `userId: 123`). **Never put passwords here!**
- **Signature**: Ensures the token hasn't been tampered with.

---

## 3. Simple Implementation

### **Backend: Creating a Token**
```javascript
const jwt = require('jsonwebtoken');

const token = jwt.sign(
  { id: user._id },    // Payload
  process.env.SECRET,   // Secret Key
  { expiresIn: '1d' }   // Expiry
);
```

### **Backend: Checking a Token**
```javascript
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send("No card, no entry!");

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) return res.status(403).send("Fake card!");
    req.userId = decoded.id;
    next();
  });
};
```

---

## 4. When NOT to use JWT?
- If you need to "log out" a user instantly from all devices (JWTs stay valid until they expire).
- For very simple websites that don't have a "login" system.

---

## 💡 Security Tip:
Always store your JWT secret in a `.env` file. If someone steals your secret, they can forge ID cards for anyone!
