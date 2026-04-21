You are a senior backend engineer. I already have a **Student Management System backend built using Node.js and Express.js with clean architecture (routes, controllers, services, models, middlewares)** and currently using **in-memory storage**.

Now, upgrade the existing project to use **MongoDB Atlas** as the database with **Mongoose**, ensuring a clean and error-free integration.

---

### 1. MongoDB Integration

* Use **MongoDB Atlas URI** (I will provide it in `.env`)
* Use **mongoose** for connection
* Create a proper database connection file (`config/db.js`)
* Use `dotenv` to manage environment variables

---

### 2. Project Changes (IMPORTANT)

Modify the existing architecture WITHOUT breaking structure:

* Replace in-memory storage with MongoDB
* Update **services layer** to interact with database
* Keep controllers thin (only request/response handling)

---

### 3. Schema Design (Mongoose)

Create a proper **Student Schema** using mongoose:

Fields:

* name (String, required)
* age (Number, required)
* course (String, required)
* createdAt (default: Date.now)

Add:

* Validation rules
* Schema-level constraints
* Clean and scalable schema design

---

### 4. Database Connection Handling

* Proper async connection using mongoose
* Handle:

  * Connection success
  * Connection failure (graceful exit with message)
* Do NOT crash silently

---

### 5. CRUD with MongoDB

Update all operations:

* Create → `Student.create()`
* Get All → `Student.find()`
* Get by ID → `Student.findById()`
* Update → `Student.findByIdAndUpdate()`
* Delete → `Student.findByIdAndDelete()`

---

### 6. Error Handling (VERY IMPORTANT)

Handle all possible errors:

* Invalid MongoDB ObjectId
* Validation errors
* Duplicate data (if any)
* Database connection issues

Use:

* Global error handler middleware
* Try-catch in async functions
* Proper status codes

---

### 7. Middleware Improvements

* Keep existing middleware (logger, validation)
* Add validation before hitting database
* Prevent invalid data from reaching MongoDB

---

### 8. Environment Variables

Use `.env` file:

Example:
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000

Explain how to:

* Install dotenv
* Load env variables properly

---

### 9. Efficiency & Best Practices

* Use async/await everywhere
* Avoid blocking code
* Keep services reusable
* Follow clean architecture strictly

---

### 10. Output Format

Provide:

1. Updated folder structure (if changed)
2. Full code for:

   * db connection file
   * mongoose model
   * updated services
   * updated controllers (if needed)
3. Step-by-step explanation
4. Common mistakes and how to avoid them
5. How to test using Postman

---

### 11. Bonus (IMPORTANT)

* Add pagination using query params (page, limit)
* Add search using name (regex or partial match)

---

### 12. Constraint

* DO NOT use any frontend
* DO NOT skip explanation
* Ensure code runs without errors

---

Make this upgrade production-ready and beginner-friendly with deep explanations.
