# Module 1: React Foundations 🧱

Welcome to your first step into React! Today, we stop playing with the DOM manually and start building with **Components**.

---

## 1. What is React? (The Brain 🧠)
In Day 2, you used JavaScript to find an element (DOM) and change it. This is like a chef having to manually move every single grain of rice on a plate.

**React** is different. It's a library that manages the page for you. You tell React **how you want the UI to look based on data**, and React takes care of the resto.

> **The Lego Analogy**: Imagine building a castle. Instead of building it one brick at a time on the final spot, you build small sections (The Gate, The Tower, The Wall) and then snap them together. Those sections are **Components**.

---

## 2. JSX: The Language of React 🗣️
Students often confuse React with JSX. Here is the distinction:
- **React**: The "Brain" (The logic, the state, the power).
- **JSX**: The "Language" (How we write UI that looks like HTML inside JavaScript).

### The "Magic" of JSX
In pure JS, creating a title looks like this:
```javascript
const h1 = document.createElement("h1");
h1.innerText = "Hello";
```

In React (using JSX), it looks like this:
```javascript
function App() {
  return <h1>Hello</h1>;
}
```

**Under the hood**: React converts that `<h1>` into `React.createElement("h1", null, "Hello")`. JSX is just "syntax sugar" to make our lives easier!

---

## 3. Components: The Building Blocks 🏗️
A component is just a JavaScript function that returns JSX.

```javascript
function WelcomeCard() {
  return (
    <div className="card">
      <h1>Welcome to React!</h1>
      <p>This is your first component.</p>
    </div>
  );
}
```

---

## 4. Props: Passing Data 🍎
If Components are Lego bricks, **Props** are the colors and sizes of those bricks. They allow us to make components dynamic.

```javascript
function Greet(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage:
// <Greet name="Sriram" />
```

Think of Props as **parameters** for your UI functions.

---

## 5. How React Replaces DOM Manipulation 🔄
In Vanilla JS, to update a counter, you had to:
1. Find the element.
2. Get the current value.
3. Update the value.
4. Put it back in the element.

**In React, we never touch the DOM manually.**
We use **The Virtual DOM**. React keeps a "ghost version" of your page in memory. When something changes, it compares the ghost to the real one and updates only the tiny parts that actually changed. This is why React is so fast!

---

## 🧪 Quick Activity: JSX Thinking
Look at your favorite website (like YouTube or Netflix).
1. Can you identify 3 components? (e.g., SearchBar, VideoCard, Sidebar).
2. What "Props" would a `VideoCard` need? (e.g., title, thumbnail, views).

**Try the demo:**
Check out `examples/1_Components_and_Props.jsx` to see how props work in action!
