# Interview Preparation: File Systems, MVC & Middleware 🎓

Day 5 covers structural concepts that are frequent flyer questions in backend interviews. Use this guide to master the answers.

---

## 🚀 Top 5 Interview Questions

### 1. What is the difference between `fs.readFile()` and `fs.readFileSync()`?
*   **Answer**: `fs.readFile()` is **asynchronous** and non-blocking. It accepts a callback (or returns a promise) and allows the server to continue processing other requests while the file is being read. `fs.readFileSync()` is **synchronous** and blocking; it pauses the entire execution of the script until the file is fully read.
*   **Follow-up**: "When would you use the Sync version?" -> Only during application startup (e.g., loading a config file) where blocking the thread once doesn't matter.

### 2. Can you explain the MVC architecture in the context of Express?
*   **Answer**: MVC is a pattern used to separate code into three logical components:
    *   **Model**: Logic for data (database queries or file system interaction).
    *   **View**: The template (HTML/EJS) rendered to the user.
    *   **Controller**: The business logic that connects the Model and View.
*   **Benefit**: Improved maintainability, easier testing, and better team collaboration.

### 3. What is "Middleware" in Express?
*   **Answer**: Middleware is a function that has access to the Request (`req`), Response (`res`), and the `next` function in the application's request-response cycle. It can execute code, modify the request/response objects, end the cycle, or call the next middleware in the stack.
*   **Critical keyword**: Mention `next()`. If you don't call it, the request will hang.

### 4. How do you serve images or CSS files in Express?
*   **Answer**: We use the built-in `express.static()` middleware. You pass the name of the folder containing static assets (usually `public`) to it.
*   **Code**: `app.use(express.static('public'))`.

### 5. Why do we need `express.urlencoded()`?
*   **Answer**: By default, Express cannot read data sent via an HTML form POST request. `express.urlencoded()` is a built-in middleware that parses incoming requests with URL-encoded payloads and makes that data available on `req.body`.

---

## 💡 Scenario-Based Questions

### Question: "My server is running out of memory when I read a 5GB file using `fs.readFile`. How do I fix it?"
*   **Expert Answer**: "I would use **Streams**. `fs.readFile` loads the entire file into buffer/memory. For large files, `fs.createReadStream` allows us to read the file in small 'chunks' and process them piece by piece, which is much more memory-efficient."

### Question: "How do you handle errors in asynchronous middleware?"
*   **Expert Answer**: "In modern Express, I use `try...catch` blocks with `async/await`. If an error occurs, I pass it to the `next(err)` function, which triggers Express's built-in or custom global error-handling middleware."

---

## 🎯 Key Terms to Drop
- **Serialization/Deserialization**: Converting objects to strings (JSON) and vice-versa.
- **Statelessness**: REST APIs don't store user session state (usually).
- **Concerns (Separation of)**: The core philosophy behind MVC.
- **Event-Driven I/O**: Why `fs` async is so fast in Node.
