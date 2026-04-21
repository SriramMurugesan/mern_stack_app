# Module 3: MVC Pattern & Advanced Middleware 🏗️

As your apps get bigger, putting all code in `app.js` is a recipe for disaster. Professional developers use structural patterns like **MVC**.

## 1. The MVC Pattern

MVC stands for **Model**, **View**, and **Controller**. It's all about "Separation of Concerns".

- **Model (The Data)**: Handles the logic for your data. In Day 5, this is our `fs` code that talks to `json` files.
- **View (The UI)**: What the user sees. In Node, these are our **EJS** files.
- **Controller (The Brain/Logic)**: The "middleman". It takes a request, asks the Model for data, and tells the View what to render.

### 📁 Folder Structure:
```text
src/
  controllers/
    postController.js
  models/
    postModel.js
  routes/
    postRoutes.js
  views/
    index.ejs
app.js
```

---

## 2. Advanced Middleware Flow

Middleware is just a function that sits between the **Request** and the **Response**.

### Types of Middleware:
1. **Application-level**: Runs for every single request (`app.use`).
2. **Router-level**: Runs only for specific routes.
3. **Error-handling**: Catches crashes and sends a nice message.
4. **Third-party**: Built by others (e.g., `morgan` for logging).

### Creating a custom middleware:
```javascript
const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} request received at ${new Date()}`);
    next(); // CRITICAL: If you don't call next(), the request hangs forever!
};

app.use(loggerMiddleware);
```

---

## 3. Middleware Flow Scenario

Think of a "VIP Post" feature:
1. **Middleware 1 (Logger)**: "Someone is visiting `/post/1`."
2. **Middleware 2 (Auth)**: "Are they logged in? No? Send to Login page."
3. **Controller**: "They are logged in! Let me fetch Post 1 from the file system and render it."

```javascript
const checkAuth = (req, res, next) => {
    const isAdmin = false; // Simulated check
    if(isAdmin) {
        next();
    } else {
        res.status(403).send("Access Denied!");
    }
};

// Only the admin can see the secret dashboard
app.get('/admin', checkAuth, (req, res) => {
    res.render('admin');
});
```

---

## 4. Built-in Middleware you NEED:

### For Forms (POST requests):
To read data from an HTML `<form>`, you MUST use:
```javascript
app.use(express.urlencoded({ extended: true }));
```

### For JSON (AJAX/React):
```javascript
app.use(express.json());
```

---

## 🎯 Task for Students
1. Create a custom middleware that logs the IP address of the user.
2. Structure your app by moving your routes into a separate `routes/` folder.
3. Try to implement a simple "Maintenance Mode" middleware that, when active, sends a "Be right back!" message for every request.
