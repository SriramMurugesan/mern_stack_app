# 07: The Pro Debugger Encyclopedia 🕵️‍♂️🚀

A **Stack Trace** is the "Trail of Breadcrumbs" left by an error. Moving from Junior to Pro means knowing exactly which crumbs to follow.

---

## 1. The Pro Methodology

When you see a wall of red text, solve it in three "Layers":

1.  **WHAT?** (The top line: `TypeError`, `ReferenceError`, `MongoError`).
2.  **WHERE?** (The first line that mentions YOUR file path, not `node_modules`).
3.  **WHY?** (Checking the variable values using `console.log` or a Debugger).

---

## 2. 🗄️ Database & Model Errors (MongoDB/Mongoose)

| Error Code/Name | What happened? | Pro Solution |
| :--- | :--- | :--- |
| **`ValidationError`** | You sent data that violates your Schema (e.g., missing a `required` field). | Check `req.body` in your controller. Ensure you are sending all required fields from the Frontend. |
| **`CastError`** | You're trying to find a document with a "gibberish" ID. | Usually happens when you pass `undefined` or a string like `"abc"` into `findById()`. Ensure the ID is a valid 24-character string. |
| **`E11000 Duplicate Key`** | You're trying to create a document with a `unique: true` value that already exists. | Catch this in your controller and send a `400` error back to the user: "Email already registered." |
| **`MongoNetworkError`** | Your server can't talk to MongoDB Atlas. | Check your `IP Whitelist` in MongoDB Atlas and ensure your `MONGO_URI` is correct in `.env`. |

---

## 3. 🌐 Server & API Errors (Node/Express)

| Error Code/Name | What happened? | Pro Solution |
| :--- | :--- | :--- |
| **`ERR_HTTP_HEADERS_SENT`** | You tried to send TWO responses for ONE request. | You likely forgot to `return` after sending a response in an `if` block. **Fix**: `return res.status(400).json(...)`. |
| **`CORS Policy Error`** | The browser blocked the request because the Backend didn't "invite" the Frontend. | Install `cors` package. Use `app.use(cors())` and specify your Frontend URL in the options. |
| **`500 Internal Error`** | Your backend crashed but didn't send a specific message. | Look at your Terminal (not the browser console). The crash is usually an unhandled `Promise` or a typo in a controller. |
| **`PayloadTooLarge`** | The user tried to upload a file (like a big image) that exceeds Express limits. | Increase the limit: `app.use(express.json({ limit: '50mb' }))`. |

---

## 4. ⚛️ Frontend & Logic Errors (React)

| Error Code/Name | What happened? | Pro Solution |
| :--- | :--- | :--- |
| **`Infinite Update Loop`** | `Maximum update depth exceeded`. | You are updating state *directly* inside the body of a component or a `useEffect` without a dependency array `[]`. |
| **`Objects as Children`** | `Objects are not valid as a React child`. | You tried to display a whole object like `{user.name}` instead of just the property `user.name`. |
| **`Hook Rule Violation`** | `Hooks can only be called inside the body of a function component`. | You tried to use a hook (like `useState`) inside a loop, an `if` statement, or a normal JavaScript function. |

---

## 5. 🔐 Auth & Security Errors (JWT)

| Error Code/Name | What happened? | Pro Solution |
| :--- | :--- | :--- |
| **`TokenExpiredError`** | The user's login session has timer-out. | On the Frontend, catch this and redirect the user back to the `/login` page. |
| **`JsonWebTokenError`** | The token is invalid or the `JWT_SECRET` is wrong. | Check if your `.env` file actually has the `JWT_SECRET` loaded. Sometimes "restarts" clear the memory. |

---

## 6. ⚙️ Environment & Setup Errors

| Error Code/Name | What happened? | Pro Solution |
| :--- | :--- | :--- |
| **`EADDRINUSE`** | Another process is already using your Port (e.g., 5000). | Run `npx kill-port 5000` or change the port in your `.env` file. |
| **`process.env undefined`** | Your environment variables are missing. | Ensure `require('dotenv').config()` is at the VERY TOP of your `index.js` or `app.js`. |

---

## 💡 The "Pro" Debugger Checklist:
- [ ] **Terminal vs. Browser**: If it's a 500 error, look at the **Terminal**. If it's a 404/403, look at the **Network Tab** in the browser.
- [ ] **Network Tab is King**: In Chrome DevTools, look at the "Response" sub-tab in Network to see the *actual* error message sent by the server.
- [ ] **The "Rubber Duck"**: Explain your code to a friend (or a rubber duck). Often, you'll find the logic flaw while speaking!
