# Day 5: File Systems, Templates & MVC Architecture 🏗️

Welcome to Day 5! Today, we bridge the gap between simple "Hello World" APIs and full-scale web applications. We will learn how to interact with the server's file system, render dynamic HTML pages using templates, and organize our code using the industry-standard **MVC Pattern**.

## 📅 Schedule

### ⏰ 9:00 AM – 11:00 AM | Module 1: File System (FS) Module
Focus: Reading, writing, and managing files on the server.
- [Module 1 Documentation](Module_1_File_System.md)
- **Topics**: Synchronous vs Asynchronous handling, `fs` core methods, working with JSON files.
- **Demos**: `examples/1_fs_basics.js`.

### ⏰ 11:15 AM – 1:15 PM | Module 2: Templates & Static Content
Focus: Building dynamic UIs that look professional.
- [Module 2 Documentation](Module_2_Templates_and_Static_Assets.md)
- **Topics**: Setting up EJS (Embedded JavaScript), passing data to views, and serving static files (CSS/Images).

### ⏰ 2:00 PM – 4:15 PM | Module 3: MVC Pattern & Advanced Middleware
Focus: Professional code organization and request pipeline control.
- [Module 3 Documentation](Module_3_MVC_and_Advanced_Middleware.md)
- **Topics**: Model-View-Controller architecture, custom middleware, and execution flow.
- **Demos**: `examples/2_middleware_demo.js`.

### ⏰ 2:00 PM – 4:15 PM | Lab: Building a Blog System
Focus: Applying everything to build a file-based blogging platform.
- [Lab Project Guide](Module_4_Lab_Building_a_Blog_System.md)
- **Project Folder**: `lab_blog_system/`
- **Goal**: Create a system where users can write blog posts that are saved as JSON files and rendered via EJS.

### 🎯 Interview Preparation
- [**Interview Preparation Guide**](Interview_Preparation.md)
- **Focus**: Middleware flow, MVC benefits, and Async File I/O.

---

## 🚀 Getting Started

1. **Navigate to the Day 5 folder:**
   ```bash
   cd Day5_File_Systems_Middleware_MVC
   ```
2. **Setup the Lab:**
   ```bash
   cd lab_blog_system
   npm install
   npm run dev
   ```

---

## 👨‍🏫 Instructor Demo Guide (Day 5)

### 1. The "Excel vs Database" Analogy
- **Concept**: Explain why we use `fs` before we jump into Databases like MongoDB.
- **Point**: "Think of `fs` as reading from a Notepad or Excel file. It's the simplest way to keep data between restarts. Once you master this, MongoDB will feel like magic."

### 2. The "Mad Libs" Analogy (Templates)
- **Concept**: Explain View Engines.
- **Story**: "EJS is like a game of Mad Libs. I have a template that says 'Hello [NAME]'. My server just fills in the name before sending it to the user."

### 3. The "Assembly Line" (Middleware)
- **Concept**: Middleware flow.
- **Demo**: Show two middlewares. One logs the request time, another checks if a user is "logged in". 
- **Point**: "Middleware is like security guards or inspectors on an assembly line. Each one checks or adds something before the product (Response) is shipped."

---

## 🎯 The Day 5 Goal
By the end of today, you will be able to organize an Express application using **MVC**, handle **file storage**, and render **dynamic websites** that feel like real products.
