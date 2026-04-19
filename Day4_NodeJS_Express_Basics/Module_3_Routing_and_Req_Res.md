# Module 3: Routing & The Req-Res Cycle 🔄

Everything in a web server is about **Input** and **Output**. 
- **Input**: The Request (`req`).
- **Output**: The Response (`res`).

---

## 1. The HTTP Methods (CRUD's Cousins)

The web uses "Verbs" to tell the server what we want to do.

| Method | Meaning | Action |
| --- | --- | --- |
| **GET** | Read | "Give me the data." |
| **POST** | Create | "Save this new item." |
| **PUT** | Update | "Replace this existing item." |
| **DELETE**| Delete | "Remove this item." |

---

## 2. The `req` and `res` Objects (The Envelopes)

### The Request (`req`)
The request object contains everything the client sent.
- `req.params`: Variables in the URL (e.g., `/user/:id`).
- `req.query`: Optional filters (e.g., `/search?color=red`).
- `req.body`: The data sent in a POST request (the JSON object).

### The Response (`res`)
The response object is how we talk back.
- `res.status(200)`: Tells the client everything is "OK".
- `res.status(404)`: "Not Found".
- `res.send()`: Sends text.
- `res.json()`: Sends a JSON object (Perfect for React!).

---

## 3. Global Objects in Node.js 🌍

In the browser, you have `window`. In Node, we have **Global Objects** that help us understand where we are and what we are doing.

1.  **`process`**: Tells you about the current computer (e.g., `process.env` for environment variables).
2.  **`__dirname`**: The absolute path to the folder where the current file is. Useful for finding files!
3.  **`__filename`**: The path to the current file.
4.  **`module`**: Used to export code so other files can use it (`module.exports`).

---

## 4. Middleware: The Security Checkpoint 🛡️

Before a request reaches your logic, it can pass through **Middleware**.
Imagine a security guard at a club:
- "Are you logged in?"
- "Is your JSON formatted correctly?"

Example:
```javascript
app.use(express.json()); // Middleware that parses JSON "envelopes" for us automatically.
```

---

## 5. The Request-Response Cycle (Visual)

1. **Client** (Browser/Mobile) sends a Request.
2. **DNS** finds the server IP.
3. **Express** receives the request.
4. **Middleware** checks data/security.
5. **Route Handler** performs logic (e.g., gets data from Database).
6. **Express** sends back the **Response**.
7. **Connection Closes**.

---

## 💡 Instructor Demo Code

Show the students how to extract data from a URL:

```javascript
app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.json({ message: `Hello, ${name}!` });
});
```
**Point to make**: "The `:name` acts like a variable in a function!"
