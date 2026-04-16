# Module 1: JavaScript Basics & The DOM 🚀

Welcome to Day 2! Today, we breathe life into our websites. HTML is the skeleton, CSS is the skin, but **JavaScript is the brain**.

---

## 1. JS Basics: The "Memory" of Your App
Since we are starting from scratch, let's look at how JS stores information.

### Variables: Boxes for Data
Imagine you have boxes to store things. In JS, we use `let` and `const`:
- `let`: A box you can open and change later (e.g., a score in a game).
- `const`: A locked box. Once you put something in, it stays there (e.g., your name).

```javascript
let score = 10;
score = 20; // This is okay!

const myName = "Antigravity";
// myName = "AI"; // This will cause an ERROR!
```

### Data Types: What's inside the box?
1. **String**: Text wrapped in quotes `"Hello"`.
2. **Number**: Just numbers like `42` or `3.14`.
3. **Boolean**: True or False (Like a light switch).

---

## 2. Functions: The "Recipes"
A function is a set of instructions you can reuse.

```javascript
// Defining the recipe
function greet(name) {
    return "Hello " + name + "!";
}

// Using the recipe
console.log(greet("Sriram")); // Output: Hello Sriram!
```

---

## 3. Closures: The "Function Backpack" 🎒
This is a tricky topic, but think of it this way:
When a function is born, it carries a **backpack** that contains all the variables that were around it at that time. Even if you take the function far away, it still has its backpack!

**Example:**
```javascript
function createCounter() {
    let count = 0; // Inside the backpack
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

---

## 4. Functional Programming: Smart Lists 📋
Instead of using complex loops, we use smart methods to handle lists (Arrays).
- **Map**: Transform every item (e.g., Uppercase all names).
- **Filter**: Keep only some items (e.g., Get only prices > 100).

```javascript
let prices = [10, 20, 30];
let doubled = prices.map(p => p * 2); // [20, 40, 60]
```

---

## 5. The DOM: Making Pages Interactive 🖱️
The **DOM (Document Object Model)** is how JavaScript "sees" your HTML.

### Selecting Elements
```javascript
const btn = document.querySelector("#myButton");
const title = document.querySelector("h1");
```

### Event Listeners
This is how we tell JS to "listen" for a click or a keypress.
```javascript
btn.addEventListener("click", () => {
    title.innerText = "Button was Clicked!";
    title.style.color = "red";
});
```

---

## 6. AI-Assisted DOM Manipulation 🤖
Using Antigravity, you can generate complex logic by describing it in plain English.

**Prompt Example:**
> "Create a script that finds all buttons on the page. When clicked, change the background color of the body to a random color and log the button's text to the console."

---

## 🧪 Quick Lab: Try it out!
1. Open `examples/basics_demo.js`.
2. Run it using `node Day2_JS_Logic_Async/examples/basics_demo.js`.
3. Experiment by changing the values!
