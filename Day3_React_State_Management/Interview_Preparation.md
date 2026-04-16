# Interview Preparation: React Foundations & State 🎤

Master these questions to ace your React interviews! We've categorized them from **Basic** to **Advanced**.

---

## 🟢 Level 1: Basic (The Essentials)

### 1. What is React and why do we use it?
**Answer**: React is a JavaScript library for building user interfaces. We use it because it allows us to build complex UIs using small, isolated pieces called **Components**. It also handles DOM updates efficiently using the **Virtual DOM**.

### 2. What is JSX? Does the browser understand it?
**Answer**: JSX stands for JavaScript XML. It's a syntax that looks like HTML but lives inside JS. No, browsers do not understand JSX; it must be compiled into standard JavaScript (via tools like Babel) into `React.createElement()` calls.

### 3. What are Components in React?
**Answer**: Components are the building blocks of a React app. They are essentially JavaScript functions that return JSX. They help in code reusability and keeping the code organized.

### 4. What is the difference between State and Props?
**Answer**: 
- **Props**: Data passed from a parent component to a child. They are **read-only** (the child cannot change them).
- **State**: Data managed **locally** within a component. The component can change its own state, which triggers a re-render.

---

## 🟡 Level 2: Intermediate (Hooks & Logic)

### 5. Why do we need the 'useState' hook?
**Answer**: In standard JS, when a variable changes, the UI doesn't automatically update. `useState` allows a component to "remember" values. When the state changes, React automatically **re-renders** the component to reflect the new data in the UI.

### 6. What is the "Re-render Cycle" in React?
**Answer**: It is the process where React detects a state change, executes the component function again to get the new JSX, compares it to the previous version (Diffing), and updates only the necessary parts of the real DOM.

### 7. What is 'useEffect' and what are its common use cases?
**Answer**: `useEffect` is a hook used for "side effects"—things that happen outside the UI flow. Common use cases include:
- Fetching data from an API.
- Subscribing to an event.
- Manually updating the DOM (e.g., changing document title).
- Setting up timers.

### 8. What is the significance of the "Dependency Array" in `useEffect`?
**Answer**:
- `[]`: Runs only once when the component mounts (appears).
- `[value1, value2]`: Runs on mount and every time `value1` or `value2` changes.
- **No array**: Runs on every single re-render (usually avoided).

---

## 🔴 Level 3: Advanced (Performance & Architecture)

### 9. What is the Virtual DOM and how does it improve performance?
**Answer**: The Virtual DOM is a lightweight copy of the real DOM kept in memory. When state changes, React updates the Virtual DOM first, compares it with a previous version (a process called **reconciliation** or **diffing**), and then applies only the minimal required changes to the real DOM. This is much faster than re-painting the entire real DOM.

### 10. How does React's one-way data flow work?
**Answer**: Data always moves from **Parent to Child** via props. If a child needs to send data back up, it must call a function passed down to it by the parent. This makes the application more predictable and easier to debug.

### 11. What are "Controlled Components" in React?
**Answer**: A component where the form data (like an input value) is handled by the React state. The input's `value` is tied to a state variable, and its `onChange` updates that state. React is the "single source of truth" for the input data.

### 12. Explain the "Keys" prop and why it's important in lists.
**Answer**: Keys help React identify which items in a list have changed, been added, or removed. Without keys, React might re-render the entire list instead of just the specific item that changed, leading to poor performance.

---

## 🛠️ Practical Scenario Question
**Question**: "Your search bar is making an API call on every single keystroke, causing performance issues. How would you fix this?"
**Answer**: I would use **Debouncing**. Instead of calling the API immediately, I would wait for a few milliseconds (e.g., 300ms) after the user stops typing before making the request. In React, this is often handled using a `useEffect` with a `setTimeout` and a cleanup function.
