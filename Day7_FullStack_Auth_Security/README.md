# Day 7: Full Stack Bridge, Security & Auth 🔐🌐

Welcome to Day 7! Today is the day it all comes together. We will connect our React frontend with our Express backend to create a true **MERN stack** application. We also step into the world of **Cybersecurity**—learning how to protect user data and manage secure sessions.

## 📅 Schedule

### ⏰ 9:00 AM – 11:00 AM | Module 1: Full Stack Bridge
Focus: Connecting the dots between Client and Server.
- [Module 1 Documentation](Module_1_Full_Stack_Bridge.md)
- **Topics**: Client-Server Architecture, CORS (The #1 Backend Bug), and Axios fetch patterns.
- **Demos**: `examples/1_cors_demo.js`.

### ⏰ 11:15 AM – 1:15 PM | Module 2: Error Handling & AI Debugging
Focus: Professional debugging and resilient apps.
- [Module 2 Documentation](Module_2_Error_Handling_AI.md)
- **Topics**: Global Error Middleware, Stack Trace Analysis, and prompting AI for bug fixes.

### ⏰ 2:00 PM – 4:15 PM | Module 3: Security & Auth
Focus: Keeping bad actors out.
- [Module 3 Documentation](Module_3_Security_and_Auth.md)
- **Topics**: JWT (JSON Web Tokens), Password Hashing (`bcrypt`), and Protecting Routes.
- **Demos**: `examples/2_jwt_flow.js`.

### ⏰ 2:00 PM – 4:15 PM | Lab: Secure Auth System
Focus: Building a Login/Register system from scratch.
- [Lab Project Guide](Module_4_Lab_Secure_Auth_System.md)
- **Project Folder**: `lab_secure_auth/`
- **Goal**: Create a full-stack portal where users can safely register and access private data.

### 🎯 Interview Preparation
- [**Interview Preparation Guide**](Interview_Preparation.md)
- **Focus**: JWT vs Sessions, CORS explained, and Security best practices.

---

## 🚀 Getting Started

1. **Navigate to the Day 7 folder:**
   ```bash
   cd Day7_FullStack_Auth_Security
   ```
2. **Setup the Lab:**
   ```bash
   cd lab_secure_auth/server
   npm install
   npm run dev
   ```

---

## 👨‍🏫 Instructor Demo Guide (Day 7)

### 1. The "Border Control" Analogy (CORS)
- **Concept**: Explain why browsers block requests between different ports (3000 vs 5000).
- **Point**: "Port 3000 is a different country than Port 5000. For them to trade data, they need a special visa called CORS. If the server doesn't grant it, the browser blocks the trade."

### 2. The "Hotel Key Card" (JWT)
- **Concept**: Explain how stateless auth works.
- **Story**: "When you check into a hotel (Login), they give you a key card (JWT). The hotel doesn't remember your face every time you go to the pool; you just show the card. The card has your room number and expiry date encoded in it."

### 3. The "One-Way Street" (Hashing)
- **Concept**: Hashing vs Encryption.
- **Demo**: Show a `bcrypt` hash. 
- **Point**: "Encryption is a two-way door. Hashing is a one-way street. We NEVER want to know the user's password. We only want to know if what they typed *turns into* the same hash we have stored."

---

## 🎯 The Day 7 Goal
By the end of today, you will have built a **Full-Stack MERN** application with **Professional Authentication**, making you capable of building apps that handle real user accounts.
