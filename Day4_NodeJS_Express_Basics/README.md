# Day 4: NodeJS, Express & Routing Basics 🟢

Welcome to Day 4! Today, we shift our focus from the **Frontend** (what the user sees) to the **Backend** (the brain behind the operation). We are diving into **Node.js**, the runtime that allowed JavaScript to escape the browser and take over the server world.

## 📅 Schedule

### ⏰ 9:00 AM – 11:00 AM | Module 1: NodeJS Architecture & Express
Focus: Understanding the "Single-Threaded" magic and our first web server.
- [Module 1 Documentation](Module_1_NodeJS_Architecture_and_Express.md)
- **Topics**: The Event Loop (Restaurant Analogy), V8 Engine, Why Node?, and Intro to Express.
- **Demos**: `examples/1_node_vs_express.js`.

### ⏰ 11:15 AM – 1:15 PM | Module 2: Installation & Environment
Focus: Setting up the workstation for professional backend development.
- [Module 2 Documentation](Module_2_Installation_and_Environment.md)
- **Topics**: NVM, MongoDB Atlas (Cloud), Environment Variables (`.env`), and Runtime Tools (`nodemon`).
- **Demos**: `examples/2_env_test.js`.

### ⏰ 2:00 PM – 4:15 PM | Module 3: Routing Basics
Focus: Handling requests and sending responses.
- [Module 3 Documentation](Module_3_Routing_and_Req_Res.md)
- **Topics**: HTTP Methods (GET, POST, etc.), Request/Response Cycle, URL Parameters, and Global Objects.
- **Demos**: `examples/3_routing_basics.js`.

### ⏰ 2:00 PM – 4:15 PM | Lab: Task Manager API
Focus: Building a real REST API from scratch.
- [Lab Project Guide](Module_4_Lab_Task_Manager_API.md)
- **Project Folder**: `lab_task_manager/`
- **Goal**: Create an API that can create, read, update, and delete tasks.

### 🎯 Interview Preparation
- [**Interview Preparation Guide**](Interview_Preparation.md)
- **Focus**: Node.js core concepts and Express basics.

---

## 🚀 Getting Started

To prepare your environment for today's session:

1. **Navigate to the Day 4 folder:**
   ```bash
   cd Day4_NodeJS_Express_Basics
   ```
2. **Install the starter dependencies (for the lab):**
   ```bash
   cd lab_task_manager
   npm install
   ```
3. **Run your first server:**
   ```bash
   npm run dev
   ```

---

## 👨‍🏫 Instructor Demo Guide (Day 4)

How to explain backend concepts to students who just learned React:

### 1. The "Where are we?" Demo
- **Context**: Open the React App from Day 3.
- **Point to make**: "Yesterday, if you refreshed the page, your data was gone. Today, we build the place where data *lives* and *stays*."

### 2. The "Waiter" Analogy (Event Loop)
- Use a physical demonstration or a diagram.
- **Story**: "Node is a busy restaurant with one waiter. If the waiter waits for the steak to cook, the restaurant fails. Node's waiter just takes the order and moves to the next customer."
- **Demo**: Show a `setTimeout` vs a loop with `console.log` to prove non-blocking behavior.

### 3. The "Traffic Controller" (Express)
- Show a basic Node `http` server (complex) vs an Express server (simple).
- **Point**: "Express is our traffic controller. It sees a request for `/users` and directs it to the right function instantly."

### 4. The "Postman/Thunder Client" Moment
- Use a tool like Thunder Client (VS Code extension) to hit your API.
- **Wow factor**: Show students that you can interact with code *without* a browser window. This is the "Aha!" moment for backend.

---

## 🎯 The Day 4 Goal
By the end of today, you will understand how to build a **REST API** that handles web requests, interacts with environment variables, and organizes logic using Express routes.

## 🛠️ Prerequisites
- Comfort with JavaScript (Day 2).
- Node.js installed on your machine.
- MongoDB Atlas account (free tier).
