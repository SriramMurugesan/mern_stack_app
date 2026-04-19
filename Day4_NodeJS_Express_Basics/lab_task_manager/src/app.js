const express = require('express');
const dotenv = require('dotenv');

// 1. Initialize Dotenv
dotenv.config();

const app = express();

// 2. Middleware to parse JSON
app.use(express.json());

// 3. Initial Memory Data (Temporary Storage)
let tasks = [
    { id: 1, title: "Understand the Event Loop", completed: true },
    { id: 2, title: "Build my first Express API", completed: false }
];

// --- ROUTES ---

// [GET] Health Check
app.get('/health', (req, res) => {
    res.json({ status: "Server is alive! 🟢" });
});

// TODO: 4. [GET] Get all tasks
// Route: /api/tasks
app.get('/api/tasks', (req, res) => {
    // Your code here
});

// TODO: 5. [POST] Create a new task
// Route: /api/tasks
app.post('/api/tasks', (req, res) => {
    // Your code here
});

// TODO: 6. [GET] Get a single task by ID
// Route: /api/tasks/:id
app.get('/api/tasks/:id', (req, res) => {
    // Your code here
});

// TODO: 7. [DELETE] Delete a task by ID
// Route: /api/tasks/:id
app.delete('/api/tasks/:id', (req, res) => {
    // Your code here
});


// 8. Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Lab Server running on http://localhost:${PORT}`);
    console.log(`💡 Tip: Use npm run dev to start with nodemon!`);
});
