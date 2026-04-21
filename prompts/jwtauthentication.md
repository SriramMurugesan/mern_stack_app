You are a senior backend + full-stack security engineer. I already have:

1. Backend: Node.js + Express + MongoDB (Student Management System with clean architecture)
2. Frontend: React (Vite) + Tailwind CSS
3. Frontend and backend are already connected using REST APIs

Now, ADD **Authentication and Security** using **JWT and password encryption**, without breaking the existing architecture.

---

### 1. Goal

* Add secure user authentication system
* Protect student routes
* Implement login & signup

---

### 2. Features to Implement

#### Authentication

* User Signup
* User Login
* JWT Token generation
* Protected routes

---

### 3. Tech Stack

* jsonwebtoken (JWT)
* bcrypt (for password hashing)
* dotenv

---

### 4. User Model (MongoDB)

Create a new **User schema**:

Fields:

* name (String, required)
* email (String, required, unique)
* password (String, required, hashed)
* createdAt (Date, default: Date.now)

Add:

* Email validation
* Password minimum length

---

### 5. Password Encryption

Use **bcrypt**:

* Hash password before saving
* Compare hashed password during login

Explain:

* What is hashing?
* Why we never store plain passwords

---

### 6. JWT Implementation

#### Token Generation

* Generate JWT on login
* Include:

  * userId
  * email
* Use secret from `.env`

Example:
JWT_SECRET=your_secret_key

---

#### Token Expiry

* Set expiration (e.g., 1h or 7d)

---

### 7. Auth Middleware (VERY IMPORTANT)

Create middleware:

* Verify JWT from request header
* Extract user info
* Attach user to request
* Reject unauthorized requests

Header format:
Authorization: Bearer <token>

---

### 8. Protect Routes

* Protect all student CRUD routes
* Only authenticated users can access

---

### 9. Backend Structure Update

Add:

* models/User.js
* controllers/auth.controller.js
* routes/auth.routes.js
* middlewares/auth.middleware.js

Keep architecture clean.

---

### 10. Frontend Integration

#### Auth Pages

* Login Page
* Signup Page

#### Token Handling

* Store JWT in:

  * localStorage (simple approach)

#### API Calls

* Send token in headers:
  Authorization: Bearer <token>

---

### 11. React Changes

* useState → manage auth state
* useEffect → check login status on load
* Protected routes (redirect if not logged in)

---

### 12. Error Handling

Handle:

* Invalid credentials
* Token expired
* Unauthorized access

Show proper UI messages.

---

### 13. Security Best Practices

* Never expose JWT secret
* Hash passwords always
* Validate inputs
* Handle token expiration

---

### 14. Output Format

Provide:

1. Updated backend structure
2. Full code:

   * User model
   * Auth controller
   * Auth middleware
   * Routes
3. Frontend:

   * Login & Signup pages
   * API integration
4. Step-by-step explanation
5. Common mistakes and fixes

---

### 15. Bonus (IMPORTANT)

* Add logout functionality
* Auto logout on token expiry
* Simple role field (optional: user/admin)

---

### 16. Constraints

* Keep it beginner-friendly
* Use clean architecture
* Ensure no breaking changes
* Ensure everything runs without errors

---

Make this secure, scalable, and easy to understand with deep explanations.
