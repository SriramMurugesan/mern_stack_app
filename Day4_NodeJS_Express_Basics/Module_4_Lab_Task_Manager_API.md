# Lab: Building a Task Manager API 📝

In this lab, you will build a backend API that manages a "To-Do" list. Instead of a browser, we will use a tool like **Thunder Client** or **Postman** to test our work.

## 🎯 The Goal
Build a server that can:
1.  **List** all tasks (GET).
2.  **Add** a new task (POST).
3.  **Find** a specific task by ID (GET).
4.  **Delete** a task (DELETE).

---

## 🛠️ Step 1: Project Initialization

1.  Navigate to the lab folder:
    ```bash
    cd Day4_NodeJS_Express_Basics/lab_task_manager
    ```
2.  Initialize the project:
    ```bash
    npm init -y
    ```
3.  Install Express and Dotenv:
    ```bash
    npm install express dotenv
    npm install --save-dev nodemon
    ```

---

## 🛠️ Step 2: Basic Server Setup

Create an `app.js` file and set up the "Heartbeat" of our server.

```javascript
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Middleware to handle JSON data
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/health', (req, res) => {
    res.json({ status: "Server is healthy! 🟢" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

---

## 🛠️ Step 3: Theoretical Data (Memory Storage)

Since we just set up MongoDB Atlas, we will start by storing tasks in a simple **Array** for now to master routing.

```javascript
let tasks = [
    { id: 1, title: "Learn NodeJS", completed: true },
    { id: 2, title: "Master Express", completed: false }
];
```

---

## 🛠️ Step 4: Building the Routes

Add these to your `app.js`:

### 1. GET All Tasks
```javascript
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});
```

### 2. POST (Create) a Task
```javascript
app.post('/api/tasks', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});
```

### 3. GET Single Task by ID
```javascript
app.get('/api/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Task not found');
    res.json(task);
});
```

---

## 🛠️ Step 5: Testing (The Fun Part!)

1.  Start your server: `npm run dev`.
2.  Open **Thunder Client** in VS Code (or your favorite API tester).
3.  **GET** `http://localhost:5000/api/tasks` -> You should see the array.
4.  **POST** `http://localhost:5000/api/tasks` with JSON: `{"title": "Buy Milk"}`.
5.  **GET** again to see the new task!

---

## 🚀 Challenge Task
Add a **DELETE** route to remove a task using `req.params.id`.

> [!TIP]
> Use `.filter()` to remove the item from the list!
