# Module 2: Error Handling & AI Debugging 🛠️🤖

Bugs are inevitable. Professionalism isn't about never having bugs; it's about how quickly you can solve them. Today we learn how to handle errors gracefully and use AI to speed up our debugging.

---

## 1. Global Error Handling Middleware

By default, when Express crashes, it sends a messy HTML page back. We want our API to send a clean **JSON** message.

### The Boilerplate (Put this at the end of `app.js`):
```javascript
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === 'development' ? err.stack : null
  });
});
```

### Throwing an Error:
```javascript
app.get('/bug', (req, res, next) => {
  const error = new Error("Something went wrong!");
  error.statusCode = 401;
  next(error); // This sends it to our global handler
});
```

---

## 2. Reading a Stack Trace

A Stack Trace is a map of the crash.
- **Top line**: The error message (The "What").
- **Middle lines**: Files and line numbers (The "Where").

### Example:
`at Object.<anonymous> (/src/controllers/userController.js:15:23)`
This means the error happened in `userController.js` on line 15, character 23.

---

## 3. Debugging with AI (The 3-Part Prompt)

When you see a red error in your console, don't panic. Use an AI assistant with this specific prompt structure:

1.  **Context**: "I am building a Node/Express app with MongoDB."
2.  **The Code**: Paste the relevant function or file.
3.  **The Error**: Paste the **FULL** stack trace from the terminal.

**Pro-Tip**: Ask the AI "Explain *why* this error happened" so you learn, instead of just copying the fix.

---

## 4. Frontend Debugging: The Network Tab

When React says `500 Internal Server Error`, don't look at your React code first!

1.  Right-click -> Inspect -> **Network Tab**.
2.  Look for the red request.
3.  Click it -> **Response Tab**.
4.  Your backend's custom JSON error message will be waiting there for you.

---

## 🎯 Task for Students
1. Purposefully misspell a variable in an Express route to cause a crash.
2. Implement the Global Error Handler and see the JSON response.
3. Copy the resulting terminal error and ask an AI (Antigravity) to explain the root cause.
