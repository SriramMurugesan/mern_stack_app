You are a senior frontend engineer. I already have a **Student Management System backend (Node.js + Express + MongoDB)**.

Now, build a **frontend application ONLY** (do NOT connect to backend yet) using modern frontend principles.

---

### 1. Project Scope

* Frontend only
* Do NOT connect to backend APIs
* Use **mock data / dummy JSON**
* Focus on UI, architecture, and concepts

---

### 2. Tech Stack

* React (with Vite)
* Tailwind CSS
* Semantic HTML5

---

### 3. Pages Required

#### Landing Page

* Clean hero section
* App introduction (Student Management System)
* Features section (CRUD operations explanation)
* CTA button (e.g., "Get Started")

#### Dashboard Page

* Display list of students (use dummy data)
* Table or card layout
* Buttons for:

  * Add Student
  * Edit Student
  * Delete Student

#### Add/Edit Student Page (Form)

* Form with:

  * name
  * age
  * course
* Proper labels (semantic HTML)
* Validation (basic frontend validation)

---

### 4. Component Architecture (IMPORTANT)

Follow reusable structure:

* components/

  * Navbar
  * StudentCard / StudentTable
  * StudentForm
  * Button
* pages/

  * Landing
  * Dashboard
  * FormPage
* hooks/ (optional custom hooks)
* utils/

Explain WHY components are separated like this.

---

### 5. React Concepts (MANDATORY)

Use and explain:

* useState (state management)
* useEffect (simulate data loading)
* Virtual DOM (concept explanation)
* Closures (where applicable, e.g., handlers)
* Props and component reusability

---

### 6. Styling (Tailwind CSS)

* Fully responsive design (mobile + desktop)
* Use Flexbox/Grid
* Clean UI (cards, spacing, typography)

---

### 7. Data Handling (IMPORTANT)

* Use dummy student data (array of objects)
* Simulate API calls using:

  * async/await
  * setTimeout (fake delay)

---

### 8. Future API Integration (Preparation)

Even though not connecting now:

* Structure code so it’s easy to plug in real APIs later
* Example: create a service file like `studentService.js`

---

### 9. Accessibility & Semantic HTML

* Use proper tags:

  * <header>, <main>, <section>, <form>, <label>, <button>
* Ensure basic accessibility

---

### 10. Output Format

Provide:

1. Folder structure
2. Full code for all components/pages
3. Step-by-step explanation
4. Responsive design explanation
5. Where backend integration will happen later

---

### 11. Constraints

* DO NOT connect to backend
* DO NOT use Redux or complex state libraries
* Keep it beginner-friendly but scalable

---

### 12. Bonus

* Add loading state (spinner or text)
* Add empty state (no students)
* Add simple search UI (not functional is fine)

---

Make the UI modern, clean, and production-like, and explain everything clearly.
