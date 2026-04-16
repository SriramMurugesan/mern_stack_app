# Module 2: State & Hooks ⚡

In Module 1, we learned about static components and props. But how do we make a page that **reacts** to user clicks or search input?

Answer: **State**.

---

## 1. useState: The Digital Memory 🧠
Imagine a light switch. It can be `ON` or `OFF`. In React, we store that information in a variable that React "watches". This is called **State**.

```javascript
import { useState } from "react";

function Counter() {
    // 1. [Current Value, Function to Update Value] = useState(Initial Value)
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click Me!
            </button>
        </div>
    );
}
```

---

## 2. The Golden Rule: The Re-render Cycle 🔄
This is the most important concept in React. If you understand this, you understand React.

### The Flow:
1. **State Changes**: You call `setCount(5)`.
2. **Re-render**: React says "Wait! The memory changed. I need to re-read the component function."
3. **Diffing**: React builds a new "Ghost DOM" and compares it to the old one.
4. **Update UI**: React updates ONLY the parts of the real website that need to change.

> **Crucial Concept**: State change → Re-render → UI update.

---

## 3. useEffect: The Side-Effect Butler 🎩
Sometimes, you want to do something that isn't related to the UI rendering, like:
- Fetching data from an API.
- Setting up a timer.
- Changing the page title.

We use `useEffect` for this. Think of it as a butler that waits for the component to "Mount" (appear on screen) and then performs a task.

```javascript
import { useEffect, useState } from "react";

function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // This code runs ONCE when the component starts
        console.log("Component is ready!");
        // We can fetch data here...
    }, []); // The [] means "Only run on start"

    return <div>Check the console!</div>;
}
```

---

## 4. State vs Props: A Quick Guide 🧐
- **Props**: Are like a gift 🎁. They come from the outside (parent) and you can't change them.
- **State**: Is like a thought 💭. It stays inside the component and you can change it whenever you want.

---

## 🧪 Mental Challenge
If I have a text input and I want to show what the user is typing in real-time on the screen:
1. What would the **Initial State** be? (e.g., an empty string `""`).
2. What function would I call every time a key is pressed? (e.g., `setText`).
3. Why does the text appear on the screen immediately? (The Re-render Cycle!).

**Try the demos:**
- `examples/2_useState_Counter.jsx`: Learn how state remembers data.
- `examples/3_useEffect_Basics.jsx`: Watch a "Background Butler" run a timer.
- `examples/4_The_Rerender_Log.jsx`: See the "Ghost DOM" re-render in real-time.
