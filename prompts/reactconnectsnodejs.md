You are a senior full-stack engineer. I already have:

1. A backend: Node.js + Express + MongoDB (Student Management System with clean architecture)
2. A frontend: React (Vite) + Tailwind CSS with component-based structure and dummy data

Now, CONNECT the frontend and backend properly using real APIs.

---

### 1. Goal

Replace dummy data in frontend with real backend API integration.

---

### 2. Backend Assumptions

* REST API endpoints exist:

  * GET /students
  * GET /students/:id
  * POST /students
  * PUT /students/:id
  * DELETE /students/:id
* Backend runs on: http://localhost:5000

---

### 3. Frontend Changes (IMPORTANT)

#### Remove Dummy Data

* Replace static data with API calls

---

### 4. API Integration Layer

Create a clean service layer:

* src/services/studentService.js

Implement using:

* fetch API
* async/await

Functions:

* getStudents()
* getStudentById(id)
* createStudent(data)
* updateStudent(id, data)
* deleteStudent(id)

---

### 5. React Integration

#### useEffect

* Fetch students when Dashboard loads

#### useState

* Store:

  * students
  * loading
  * error

---

### 6. CRUD Integration

#### Create

* Form submission → POST request
* Redirect to dashboard after success

#### Read

* Display data from API

#### Update

* Load existing data into form
* Send PUT request

#### Delete

* Delete button → DELETE request
* Update UI instantly after deletion

---

### 7. Error Handling (VERY IMPORTANT)

Handle properly:

* Network errors
* Backend validation errors
* Show user-friendly messages

---

### 8. Loading State

* Show loader while fetching data
* Disable buttons during API calls

---

### 9. CORS Handling (Backend)

Update backend:

* Install and use CORS middleware
* Allow frontend origin (http://localhost:5173)

---

### 10. Environment Variables (Frontend)

Use .env:

VITE_API_BASE_URL=http://localhost:5000

Explain how to access using:
import.meta.env

---

### 11. Code Structure (IMPORTANT)

Maintain clean architecture:

* services → API calls
* components → UI
* pages → logic + UI composition

---

### 12. Best Practices

* Use async/await (no callbacks)
* Keep components clean
* Avoid duplicate API calls
* Handle edge cases

---

### 13. Output Format

Provide:

1. Updated frontend folder structure
2. Full code:

   * studentService.js
   * updated components/pages
3. Backend CORS update code
4. Step-by-step explanation
5. Common errors and fixes (CORS, 404, etc.)

---

### 14. Bonus

* Optimistic UI update after delete
* Toast notifications (optional)
* Simple retry mechanism for failed API

---

### 15. Constraints

* Do NOT use axios (use fetch only)
* Keep it beginner-friendly
* Ensure it runs without errors

---

Make the integration clean, production-ready, and easy to understand.
