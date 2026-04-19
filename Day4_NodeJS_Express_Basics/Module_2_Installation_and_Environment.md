# Module 2: Installation & Environment 🛠️

Now that we understand the "What" and "Why" of Node.js, let's build our workspace. In backend engineering, **environment configuration** is half the battle.

---

## 1. Managing Node with NVM

Professional developers don't just "install Node." They use a **Version Manager**. 
- **The Problem**: Project A might need Node v18, while Project B needs Node v20. 
- **The Solution**: **NVM** (Node Version Manager).

### Quick Commands:
```bash
# Install a specific version
nvm install 20

# Switch to that version
nvm use 20

# See what you have
node -v
```

---

## 2. MongoDB Atlas (The Cloud Database) ☁️

Instead of installing a heavy database on your computer, we use **MongoDB Atlas**. It's a "Database-as-a-Service."

### Why NoSQL?
In Day 3, we used JSON objects in React. MongoDB stores data in **BSON** (Binary JSON). This makes it the perfect partner for JavaScript!

### 🗺️ Setup Steps:
1.  **Sign up** at [mongodb.com/atlas](https://www.mongodb.com/atlas).
2.  **Create a Cluster** (Choose the FREE tier).
3.  **Create a Database User**: Give them a username and a strong password.
4.  **Network Access**: Allow your current IP address (so your computer can talk to the cloud).
5.  **Get Connection String**: You will need this for the lab. It looks like:
    `mongodb+srv://user:pass@cluster.mongodb.net/dbname`

---

## 3. The `.env` File (The Safe) 🔐

**CRITICAL RULE**: Never, ever put your database passwords or API keys inside your code.
If you push your password to GitHub, bots will find it in seconds!

### How to use `dotenv`:
1.  Create a file named `.env` in your project root.
2.  Add your secrets like this:
    ```env
    PORT=5000
    MONGO_URI=mongodb+srv://sriram:my-secret-pass@cluster0...
    ```
3.  In your JS file, access it using:
    ```javascript
    require('dotenv').config();
    const port = process.env.PORT;
    ```

---

## 4. Professional Runtime: `nodemon` vs `node --watch`

Normally, when you change a backend file, you have to stop the server and start it again. Annoying!

- **Old way**: `nodemon index.js` (restarts automatically on save).
- **New Node.js way (v20+)**: `node --watch index.js`.

We will use `nodemon` today as it's the industry standard for older environments too.

### Setup in `package.json`:
```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

---

## 🎯 Summary
By the end of this module, students should have:
1. Node.js running via NVM.
2. A Mongo Atlas connection string.
3. A `.env` file ready to go.
4. `nodemon` installed.
