# Interview Preparation: Full Stack, Security & Auth 🎓

These topics are the "meat" of MERN stack interviews. Expect deep questions on how data moves and how it's protected.

---

## 🚀 Top 5 Interview Questions

### 1. What is CORS and why does it happen?
*   **Answer**: CORS stands for Cross-Origin Resource Sharing. It's a security mechanism implemented by browsers that prevents a script on one origin (e.g., `localhost:3000`) from accessing resources on another origin (e.g., `localhost:5000`) unless the server explicitly allows it via HTTP headers.

### 2. How does JWT authentication work?
*   **Answer**: 
    1.  User logs in with credentials.
    2.  Server verifies and generates a signed JWT.
    3.  Server sends the JWT to the Client.
    4.  Client stores it (usually in `localStorage` or a Cookie).
    5.  Client sends the JWT in the `Authorization` header for every subsequent request.
    6.  Server verifies the signature using a secret key before granting access.

### 3. What is the difference between Hashing and Encryption?
*   **Answer**: 
    *   **Hashing**: A one-way function. Once data is hashed (like a password with bcrypt), it can never be "decrypted" back to the original string. We compare hashes to verify data.
    *   **Encryption**: A two-way function. Data can be encrypted with a key and then decrypted back to its original form using the same or a different key.

### 4. Why should we use async/await for database and auth operations?
*   **Answer**: These are "I/O bound" tasks that take time. Using `async/await` ensures that the Node.js event loop isn't blocked while waiting for the database to respond or for bcrypt to compute a hash, allowing the server to handle other requests in the meantime.

### 5. What are the best practices for handling errors in an Express API?
*   **Answer**: 
    - Use a **Global Error Handling middleware** to catch all errors.
    - Send errors back in a consistent **JSON format**.
    - Don't expose **Stack Traces** in production (security risk).
    - Use appropriate **HTTP Status Codes** (400 for bad input, 401 for unauthorized, 500 for server crashes).

---

## 💡 Scenario-Based Questions

### Question: "A user is complaining they can't log in, but your backend logs aren't showing anything. What do you do?"
*   **Expert Answer**: "I would check the **Network tab** in the browser's developer tools. I'd look for a failed request to the `/login` endpoint. If the request isn't even leaving the browser, it's a frontend bug. If it's returning a **CORS error**, I know the issue is the backend's CORS configuration."

### Question: "How do you protect your JWT secret key?"
*   **Expert Answer**: "I store it in an **environment variable** (`.env`) and ensure that the `.env` file is added to `.gitignore`. In a production environment like Heroku or AWS, I would use their secret management tools."

---

## 🎯 Key Terms to Drop
- **Payload**: The data stored inside a JWT.
- **Salting**: Adding random data to a password before hashing to prevent rainbow table attacks.
- **Stateless**: The server doesn't store session data; the client holds the token.
- **Cross-Origin**: Different protocol, domain, or port.
