# Day 1: TheVibe Core Curriculum

Welcome to Day 1 of the Antigravity IDE and AI-Assisted Development curriculum.

## Overview
This folder contains the complete curriculum for teaching students the fundamentals of Natural Language Prompting, Semantic Web Structure, and AI-driven UI generation.

### Module Breakdown
- **[Module 1: Intro to Antigravity & Prompting](./Module_1_Intro_to_Antigravity.md)** (9:00 AM - 11:00 AM) - Focuses on the basics of AI-assisted development and prompt engineering.
- **[Module 2: Structure & Style](./Module_2_Structure_and_Style.md)** (11:15 AM - 1:15 PM) - Focuses on Semantic HTML5, CSS Box Model, Flexbox, and responsive Tailwind CSS via prompts.
- **[Module 3: Lab - Build a Landing Page](./Module_3_Lab_Build_Landing_Page.md)** (2:00 PM - 4:15 PM) - A hands-on lab where students use AI to prompt, iterate, and refine a complete landing page.

---

## 🛠️ The Day 1 Mini Project (`/mini_project/index.html`)

The `mini_project` folder contains the final, target output of the Day 1 Lab. It is a stunning, fully-responsive landing page.

### How (and Why) it was Built
I created this specific mini-project based on the philosophy that **Day 1 should have zero friction**. Here is the basis on which it was developed:

1. **Semantic HTML5 Core**
   - The structure relies heavily on tags like `<header>`, `<main>`, `<section>`, and `<footer>` instead of a mess of generic `<div>` tags. 
   - *Teaching Point:* This demonstrates to the students why they must prompt the AI to use "strict semantic HTML5" for clean, readable, and accessible code.

2. **Tailwind CSS via CDN**
   - I used a single `<script>` tag in the `<head>` of the `index.html` file to import Tailwind CSS directly from the web.
   - *Teaching Point:* This prevents the need to explain `npm install`, Node.js, Webpack, or complicated build tools on the very first day. Students can focus entirely on prompt engineering and see beautiful CSS results immediately within a single file.

3. **Premium "TheVibe" Aesthetics**
   - Built to look visually stunning immediately. It uses a dark-mode hero image with an overlay, a modern Flexbox/Grid 3-column layout, and sleek hover effects. 
   - *Teaching Point:* To show students that AI can build professional, enterprise-grade layouts if the prompt is structured correctly.

### How to Run and View the Project
It is a purely static file. **You do not need Python, Node.js, or any backend server.**

To view the app:
1. Open your File Explorer.
2. Navigate to `Day1_TheVibe_Core/mini_project/`.
3. Simply **double-click the `index.html` file**. It will automatically open in Chrome/Edge/Safari and render perfectly.
*(Alternatively, you can right-click the file in VS Code and select "Open with Live Server").*
