# Day 4: Interview Preparation (Node.js & Express) 💼

Mastering the theory behind Node.js is just as important as writing the code. Here are the most common interview questions for junior backend developers.

---

## 1. Core Node.js Questions

### Q: What is Node.js and why is it single-threaded?
**A:** Node.js is a runtime environment that allows JavaScript to run on the server. It is "single-threaded" to handle many concurrent connections efficiently without the overhead of creating new threads for every request. It uses an **Event Loop** to offload heavy tasks to the system kernel.

### Q: What is the "Event Loop"?
**A:** The Event Loop is the heart of Node.js. It allows Node to perform non-blocking I/O operations. It constantly checks for finished background tasks and moves their "callback" functions to the main thread for execution.

### Q: When should you NOT use Node.js?
**A:** Node.js is great for I/O-intensive apps (chats, streaming, APIs). However, it is **bad for CPU-intensive tasks** (like heavy video encryption or complex mathematical simulations) because a single heavy calculation can "block the thread" and freeze the entire server.

---

## 2. Express & Routing Questions

### Q: What is Middleware in Express?
**A:** Middleware is a function that has access to the Request and Response objects. It runs **between** receiving the request and sending the response. Common uses include logging, authentication, and parsing JSON data.

### Q: What is the difference between `res.send()` and `res.json()`?
**A:** 
- `res.send()` can send various types of responses (HTML, text, Buffer).
- `res.json()` specifically formats the response as a JSON string and sets the `Content-Type` header to `application/json`. It is preferred for building APIs.

---

## 3. Environment & Security

### Q: Why do we use `.env` files?
**A:** To keep sensitive configuration (like database passwords, API keys, and private tokens) out of our source code. This prevents them from being leaked when the code is pushed to version control systems like Git.

### Q: What does `npm install --save-dev` do?
**A:** It installs a package as a "Development Dependency." These are tools needed only during development (like `nodemon`) and are not included in the final production build of the application.

---

## 🎓 Junior Pro Tip:
When an interviewer asks "How do you handle errors in Node?", mention **Status Codes**. 
- `400`: Client made a mistake (Bad Request).
- `401`: Not authorized.
- `404`: Not found.
- `500`: Server error (Our code crashed!).
Identifying the *type* of error shows you understand the Req-Res cycle.
