# Interview Preparation: JS Logic & Async (Day 2) 🎤

Deepen your knowledge of JavaScript logic, asynchronous patterns, and the DOM.

---

## 🟢 Level 1: Basic (JS Logic)

### 1. Difference between `let`, `const`, and `var`?
**Answer**: 
- `let`: Block-scoped, can be reassigned.
- `const`: Block-scoped, **cannot** be reassigned after declaration.
- `var`: Function-scoped, can be hoisted (often leads to bugs, so we avoid it in modern JS).

### 2. What is an "Arrow Function"?
**Answer**: A shorter syntax for writing functions introducted in ES6. Example: `const add = (a, b) => a + b;`. Unlike regular functions, they do not have their own `this` context.

### 3. What is the DOM (Document Object Model)?
**Answer**: The DOM is a programming interface for web documents. It represents the page so that programs (like JavaScript) can change the document structure, style, and content.

---

## 🟡 Level 2: Intermediate (Closures & FP)

### 4. What is a Closure in JavaScript?
**Answer**: A closure is when a function "remembers" its lexical scope even when it is executed outside that scope. Imagine a function carrying a "backpack" of all the variables that were around it when it was created.

### 5. Explain `.map()` and `.filter()`.
**Answer**:
- `.map()`: Creates a **new** array by applying a function to every element of the original array.
- `.filter()`: Creates a **new** array containing only the elements that pass a specific test (return `true`).

### 6. What is the "Event Loop" in simple terms?
**Answer**: The Event Loop is what allows JS to perform non-blocking operations. It constanty checks the **Call Stack** (to see if any task is running) and the **Callback Queue**. If the stack is empty, it pushes the next task from the queue to the stack.

---

## 🔴 Level 3: Advanced (Asynchronous JS)

### 7. What is a Promise?
**Answer**: A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It can be in one of three states: `Pending`, `Fulfilled` (Resolved), or `Rejected`.

### 8. Async/Await vs Promises?
**Answer**: `Async/Await` is "syntactic sugar" built on top of Promises. It makes asynchronous code look and behave more like synchronous code, making it easier to read and maintain. You use `try...catch` blocks with async/await for error handling.

### 9. What is the Fetch API?
**Answer**: A modern, promise-based interface for making HTTP requests (like GET, POST) to servers. It replaces the old `XMLHttpRequest`.

### 10. How do you handle multiple asynchronous calls simultaneously?
**Answer**: By using `Promise.all([p1, p2, p3])`. This method takes an array of promises and returns a single promise that resolves when all of the input promises have resolved.

---

## 🛠️ Practical Scenario Question
**Question**: "How would you prevent a website from freezing while downloading a massive image or dataset?"
**Answer**: I would use **Asynchronous programming**. Instead of waiting for the download to finish (blocking the main thread), I would use `fetch()` or a similar async method. This offloads the task to the browser's background APIs, allowing the Event Loop to keep the UI responsive for the user.
