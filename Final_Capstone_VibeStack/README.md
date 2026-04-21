# 🚀 VibeStack Final Capstone: The Master Reference Portal

This project is a complete, full-stack MERN application that integrates **every single topic** covered from Day 1 to Day 8 of the curriculum. Use this as your ultimate reference for building production-ready apps.

---

## 🗺️ Topic-to-Code Mapping

### Day 1: The Vibe Core (Structure & Style)
*   **Concepts**: Semantic HTML5, Tailwind CSS, Flexbox/Grid, Responsive Design.
*   **Where it is**: See [App.jsx](file:///home/sriram/Sriram_repos/mern_stack_app/Final_Capstone_VibeStack/client/App.jsx). Every component follows semantic structure and uses Tailwind utility classes for responsive layouts.

### Day 2: JS Logic & Async Mastery
*   **Concepts**: Async/Await, Fetch API, DOM Logic.
*   **Where it is**: In [App.jsx](file:///home/sriram/Sriram_repos/mern_stack_app/Final_Capstone_VibeStack/client/App.jsx), look at the `useEffect` block where we use `axios` (the modern fetch) to retrieve data asynchronously.

### Day 3: React Foundations & State
*   **Concepts**: Components, Props, useState, useEffect.
*   **Where it is**: The entire [client/App.jsx](file:///home/sriram/Sriram_repos/mern_stack_app/Final_Capstone_VibeStack/client/App.jsx) is a React functional component using hooks to manage user sessions and post feeds.

### Day 4: NodeJS & Express Basics
*   **Concepts**: Node Architecture, Express Server, Routing, Req/Res Cycle.
*   **Where it is**: Check [server/app.js](file:///home/sriram/Sriram_repos/mern_stack_app/Final_Capstone_VibeStack/server/app.js). It initializes the server, handles HTTP objects, and mounts the routing middleware.

### Day 5: File System & Templates
*   **Concepts**: FS Module (Sync/Async), EJS View Engine, Static Content, MVC Pattern.
*   **Where it is**:
    - **FS**: Look at the request logger in [app.js](file:///home/sriram/Sriram_repos/mern_stack_app/Final_Capstone_VibeStack/server/app.js) line 30.
    - **EJS**: See the [admin.ejs](file:///home/sriram/Sriram_repos/mern_stack_app/Final_Capstone_VibeStack/server/views/admin.ejs) file and the `/admin` route.
    - **MVC**: Code is organized into `models/`, `controllers/`, and `routes/`.

### Day 6: Database & Data Operations
*   **Concepts**: MongoDB/Mongoose, Schema Design, CRUD, Aggregation.
*   **Where it is**:
    - **Schema**: [User.js](file:///home/sriram/Sriram_repos/mern_stack_app/Final_Capstone_VibeStack/server/src/models/User.js) and [Post.js](file:///home/sriram/Sriram_repos/mern_stack_app/Final_Capstone_VibeStack/server/src/models/Post.js).
    - **Aggregation**: See `getPostStats` in [postController.js](file:///home/sriram/Sriram_repos/mern_stack_app/Final_Capstone_VibeStack/server/src/controllers/postController.js).

### Day 7: Full Stack Bridge & Security
*   **Concepts**: CORS, JWT Auth, bcrypt hashing, Error Handling Middlewares.
*   **Where it is**: 
    - **Security**: [authMiddleware.js](file:///home/sriram/Sriram_repos/mern_stack_app/Final_Capstone_VibeStack/server/src/middleware/authMiddleware.js) handles token verification.
    - **Error Handling**: [errorMiddleware.js](file:///home/sriram/Sriram_repos/mern_stack_app/Final_Capstone_VibeStack/server/src/middleware/errorMiddleware.js) intercepts all crashes.

### Day 8: Advanced Vibe & Deployment
*   **Concepts**: WebSockets (Socket.io), Cloudinary Uploads, Docker.
*   **Where it is**:
    - **WebSockets**: Real-time broadcast logic in [app.js](file:///home/sriram/Sriram_repos/mern_stack_app/Final_Capstone_VibeStack/server/app.js) and [App.jsx](file:///home/sriram/Sriram_repos/mern_stack_app/Final_Capstone_VibeStack/client/App.jsx).
    - **Uploads**: Cloudinary integration in [postRoutes.js](file:///home/sriram/Sriram_repos/mern_stack_app/Final_Capstone_VibeStack/server/src/routes/postRoutes.js).
    - **Docker**: See the [Dockerfile](file:///home/sriram/Sriram_repos/mern_stack_app/Final_Capstone_VibeStack/server/Dockerfile) and [docker-compose.yml](file:///home/sriram/Sriram_repos/mern_stack_app/Final_Capstone_VibeStack/docker-compose.yml).

---

## 🛠️ How to Run

1.  **Backend Setup**:
    ```bash
    cd server
    npm install
    # Create a .env file based on .env.example
    npm run dev
    ```
2.  **View the Admin Portal (EJS)**:
    Open `http://localhost:5000/admin` in your browser.

3.  **Frontend Setup**:
    Note: In a real Vite project, you would run `npm run dev`. For this reference, the logic is all in [App.jsx](file:///home/sriram/Sriram_repos/mern_stack_app/Final_Capstone_VibeStack/client/App.jsx).

---

## 👨‍🏫 Final Instructor Note
Every file in this directory contains **line-by-line comments**. If you are unsure why a piece of code exists, simply read the comment above it—it will link back to a specific Day in the 8-day roadmap.
