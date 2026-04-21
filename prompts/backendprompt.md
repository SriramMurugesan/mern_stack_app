You are a senior backend architect. Build a **backend-only Student Management System** using **Node.js and Express.js** with clean architecture and best practices.

### Requirements:

#### 1. Project Scope

* Backend only (NO React, NO frontend)
* NO MongoDB or external database
* Use **in-memory storage (array/object)** or optionally **JSON file-based storage**
* Focus on architecture and concepts, not UI

---

#### 2. Core Features (CRUD)

Implement full CRUD operations for students:

* Create Student
* Get All Students
* Get Student by ID
* Update Student
* Delete Student

Each student should have:

* id (unique)
* name
* age
* course
* createdAt

---

#### 3. Tech Stack

* Node.js
* Express.js
* Built-in modules (fs if needed)
* No ORM / No database

---

#### 4. Architecture (IMPORTANT)

Follow a clean and scalable folder structure:

* routes/
* controllers/
* services/
* models/
* middlewares/
* utils/
* config/

Explain WHY each layer is used.

---

#### 5. Routing

* Use Express Router
* Separate routes into a `student.routes.js`
* Follow REST API conventions

---

#### 6. Middleware (MANDATORY)

Implement and explain:

* Logger middleware (log method, URL, time)
* Validation middleware (validate student input)
* Error handling middleware (global)
* Not-found middleware (404)

---

#### 7. Schema Design (WITHOUT DB)

* Create a **Student model structure**
* Validate fields manually or using custom logic
* Show how schema-like validation works without MongoDB

---

#### 8. HTTP Handling

Clearly demonstrate:

* Status codes (200, 201, 400, 404, 500)
* Request params, query, body usage
* Proper JSON responses

---

#### 9. Error Handling

* Centralized error handler
* Custom error class (optional)
* Handle invalid ID, missing fields, etc.

---

#### 10. Efficiency & Best Practices

* Avoid duplicate logic (use services layer)
* Use modular code
* Follow DRY principle
* Clean and readable code
* Async handling (even if not needed)

---

#### 11. Output Format

Provide:

1. Full folder structure
2. Step-by-step explanation
3. Complete code for each file
4. Line-by-line explanation for important parts
5. Sample API requests (Postman or curl)

---

#### 12. Bonus (if possible)

* Add simple pagination for GET all students
* Add search by name (query param)

---

Make the explanation beginner-friendly but structured like a real production backend.
