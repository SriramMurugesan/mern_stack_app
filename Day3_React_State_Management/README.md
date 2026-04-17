# Day 3: React Foundations & State Management ⚛️

Welcome to Day 3! Today, we move from the logical world of JavaScript into the structured world of **React**. We're not just learning a library; we're learning a new way of thinking about User Interfaces.

## 📅 Schedule

### ⏰ 9:00 AM – 11:00 AM | Module 1: React Foundations
Focus: React as the "Brain" and JSX as its language.
- [Module 1 Documentation](Module_1_React_Foundations.md)
- **Topics**: Components (Lego), Props, JSX vs JS, and replacing DOM manipulation.
- **Demos**: `examples/1_Components_and_Props.jsx`.

### ⏰ 11:15 AM – 1:15 PM | Module 2: State & Hooks
Focus: Making things move and remember.
- [Module 2 Documentation](Module_2_State_and_Hooks.md)
- **Topics**: `useState`, The Re-render Cycle, and `useEffect` (Side Effects).
- **Demos**: `examples/2_useState_Counter.jsx`, `examples/3_useEffect_Basics.jsx`, `examples/4_The_Rerender_Log.jsx`.

### ⏰ 2:00 PM – 4:15 PM | Lab: Movie Search App
Focus: Building a real-world project from scratch.
- [Lab Project Guide](Module_3_Lab_Movie_Search.md)
- **Project Folder**: `lab_movie_search/`
- **Goal**: Create a dynamic movie gallery that filters and searches in real-time.

### 🎯 Interview Preparation
- [**Interview Preparation Guide**](Interview_Preparation.md)
- **Focus**: Basic to Advanced React questions.

---

## 🚀 Getting Started

To run the labs and see React in action:

1. **Navigate to the lab folder:**
   ```bash
   cd Day3_React_State_Management/lab_movie_search
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Open your browser:** Follow the link shown in your terminal (usually `http://localhost:5173`).

---

## 👨‍🏫 Instructor Demo Guide (Day 3)

How to effectively show the "magic" of React to students:

### 1. The "Transition" Demo
- **Context**: Open the Day 2 Currency Converter (Vanilla JS) and Day 3 Movie Search (React).
- **Point to make**: "Yesterday, we manually touched the DOM. Today, we just change the data (State), and React handles the UI."

### 2. The "Lego" Demo (Components & Props)
- Open `src/App.jsx`.
- Create a simple `Greeting` component inside `App.jsx`.
- Pass a name as a prop: `<Greeting name="Student" />`.
- **Wow factor**: Show how you can reuse `<Greeting />` 10 times with different names instantly.

### 3. The "State" Demo (The Heart of React)
- Use `examples/2_useState_Counter.jsx`.
- Show the `count` variable. 
- Ask: "If I change this variable, will the page update?"
- Click the button. The UI updates.
- **Explanation**: "React is 'Reacting' to the state change. No `innerHTML` needed!"

### 4. The "Final Boss" Demo
- Run the full `lab_movie_search`.
- Type in the search box.
- Show how the list filters **instantly** as they type.
- **Explanation**: This is the power of React's re-rendering.

---

## 🛠️ How to run the examples

Since React needs a build environment, follow these steps to see the examples in action:
1. Ensure the dev server is running (`npm run dev`).
2. Open `src/App.jsx`.
3. Copy the code from any file in the `examples/` folder and paste it into `src/App.jsx`.
4. Your browser will automatically refresh to show the example!

---

## 🎯 The Day 3 Goal
By the end of today, you will stop thinking in terms of "changing elements on a page" and start thinking in terms of **"updating state to change the UI"**.

## 🛠️ Prerequisites
- Basic understanding of JS (Day 2).
- Node.js installed on your machine.
- A passion for building cool stuff!
