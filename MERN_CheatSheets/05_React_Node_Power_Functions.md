# 05: React & Node Power Functions ⚡

These are the functions that do the heavy lifting in your application.

---

## 1. React "Power Hooks"

### **`useState`** (The Memory)
Used to store data that can change (like a counter or user name).
```javascript
const [count, setCount] = useState(0);
// count = current value
// setCount = function to change it
```

### **`useEffect`** (The Action)
Used to run code automatically when the page loads or when a variable changes.
```javascript
useEffect(() => {
  console.log("Page loaded!");
  fetchData();
}, []); // [] means "only run once"
```

### **`useContext`** (The Teleporter)
Used to share data (like "Logged In User") across your whole app without passing props.

---

## 2. Node.js Middleware Logic

Middleware functions are like **security guards** at a club. They check the request before it reaches the final code.

### **The `next()` Function**
In Express, `next()` tells the server to move to the *next* block of code.
```javascript
const checkAdmin = (req, res, next) => {
  if (req.user.isAdmin) {
    next(); // Pass: go to the next function
  } else {
    res.status(403).send("Go away!"); // Block: send error
  }
};
```

---

## 3. When to use vs. When not to use?

| Hook/Function | Use it when... | Don't use it when... |
| :--- | :--- | :--- |
| `useState` | You need to track UI changes (typing, clicking). | You have static data that never changes. |
| `useEffect` | You need to fetch data from an API on load. | You can do the logic inside a simple click handler. |
| `Middleware` | You want to protect a route (Auth). | The logic only applies to one single tiny function. |

---

## 💡 Where to use?
- **Frontend (React)**: Use Hooks inside functional components only.
- **Backend (Node)**: Use Middleware in your router files (`app.use` or `router.get`).
