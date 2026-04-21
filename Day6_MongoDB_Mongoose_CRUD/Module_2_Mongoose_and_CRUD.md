# Module 2: Mongoose & CRUD Operations 🛠️

Once connected to MongoDB, we need a way to structure our data and perform operations (Create, Read, Update, Delete).

---

## 1. Defining a Schema & Model

A **Schema** is the blueprint for your data. A **Model** is a wrapper around that schema that allows you to perform operations.

### Example: A User Schema
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    isActive: Boolean
});

// Create the Model
const User = mongoose.model('User', userSchema);
module.exports = User;
```

---

## 2. CRUD: The Big Four Operations

### ✅ Create (Saving Data)
```javascript
const newUser = new User({
    name: "Sriram",
    email: "sriram@example.com",
    age: 26,
    isActive: true
});

await newUser.save();
// OR use the shortcut:
await User.create({ name: "Alice", email: "alice@example.com" });
```

### 🔍 Read (Finding Data)
```javascript
// Find ALL users
const allUsers = await User.find();

// Find ONE user by ID
const user = await User.findById("643a...");

// Find by filter
const activeUsers = await User.find({ isActive: true });
```

### 📝 Update (Modifying Data)
```javascript
// Update by ID
await User.findByIdAndUpdate("643a...", { age: 27 });

// Update many
await User.updateMany({ isActive: false }, { isActive: true });
```

### ❌ Delete (Removing Data)
```javascript
// Delete by ID
await User.findByIdAndDelete("643a...");

// Delete many
await User.deleteMany({ isActive: false });
```

---

## 3. Best Practices: Controllers & Models

In a professional MVC app, models live in `src/models/` and CRUD logic lives in `src/controllers/`.

**Example Controller Method:**
```javascript
// userController.js
const User = require('../models/userModel');

exports.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};
```

---

## 🎯 Task for Students
1. Create a `Product` schema in another file.
2. Build a route `/add-product` that accepts JSON data and saves it to MongoDB.
3. Verify that the product appears in your MongoDB Atlas "Collections" tab.
