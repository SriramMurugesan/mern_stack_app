# 01: Commands & Essential Libraries 🛠️

A quick reference for the most common commands and libraries you'll use in every MERN project.

---

## 1. Core NPM Commands

| Command | Purpose | When to use |
| :--- | :--- | :--- |
| `npm init -y` | Initializes a new project | Start of every backend project |
| `npm install <pkg>` | Installs a library | Adding a new tool (e.g., Express) |
| `npm install -D <pkg>` | Installs a dev tool | For tools only needed during coding (e.g., Nodemon) |
| `npm run dev` | Runs the development server | Every time you start coding |
| `npm root -g` | Finds where global packages are | Troubleshooting path issues |

---

## 2. Must-Have Backend Libraries (Node.js/Express)

### **Express** (`npm install express`)
- **What**: The framework for building web servers.
- **Why**: Handles routing, midlleware, and requests easily.
- **Example**:
  ```javascript
  const express = require('express');
  const app = express();
  app.get('/', (req, res) => res.send('Hello World!'));
  app.listen(5000);
  ```

### **Mongoose** (`npm install mongoose`)
- **What**: Data modeling tool for MongoDB.
- **Why**: Allows you to create "Schemas" (blueprints) for your data.
- **Example**:
  ```javascript
  const userSchema = new mongoose.Schema({ name: String, age: Number });
  ```

### **Dotenv** (`npm install dotenv`)
- **What**: Keeps secrets (like API keys) safe.
- **Why**: You never want to push your passwords to GitHub!

---

## 3. Must-Have Frontend Libraries (React)

### **Axios** (`npm install axios`)
- **What**: Tool to make API requests to your backend.
- **Why**: Easier to use and more powerful than the built-in `fetch`.

### **React Router DOM** (`npm install react-router-dom`)
- **What**: Navigation for React.
- **Why**: Lets you have multiple "pages" (Home, Profile, etc.) in your app.

### **Lucide React** (`npm install lucide-react`)
- **What**: Beautiful, lightweight icons.
- **Example**: `<User size={24} />`

---

## 💡 Pro Tip:
Always check your `package.json` file. It's the "Table of Contents" for your project. If a library isn't listed there, your code won't find it!
