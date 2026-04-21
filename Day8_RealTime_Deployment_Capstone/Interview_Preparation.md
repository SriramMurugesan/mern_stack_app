# Interview Preparation: Advanced Topics & Deployment 🎓

This final guide covers the "senior-lite" topics that set you apart from other bootcamp graduates.

---

## 🚀 Top 5 Interview Questions

### 1. WebSocket vs. HTTP Long Polling: What's the difference?
*   **Answer**: HTTP Long Polling involves the client repeatedly asking the server for new data. This is resource-heavy. WebSockets establish a single, persistent, full-duplex connection. Data can flow both ways instantly without the overhead of repeated HTTP headers.

### 2. Why use Docker instead of just running Node on the server?
*   **Answer**: Docker ensures the "Environment is the code." It captures the exact OS, Node version, and global libraries needed. It prevents the "It works on my machine" problem and makes it trivial to scale your app by running multiple containers.

### 3. What is a CDN and why use one for images?
*   **Answer**: A Content Delivery Network (like Cloudinary) stores files on servers distributed geographically. When a user in London requests an image, they get it from a London server, not from your main server in New York. This reduces latency and offloads traffic from your backend.

### 4. What is CI/CD? (DevOps Basics)
*   **Answer**: 
    - **CI (Continuous Integration)**: Automatically building and testing your code every time you push to GitHub.
    - **CD (Continuous Deployment)**: Automatically shipping that code to production (e.g., Vercel) once the tests pass.

### 5. How do you handle secrets (API keys) safely in production?
*   **Answer**: Secrets should never be committed to source control. In production, we use the host's **Environment Variable** management system. For even higher security, we can use "Secret Vaults" like AWS Secrets Manager.

---

## 💡 Scenario-Based Questions

### Question: "Your app is getting very slow during Peak Hours. How do you find the bottleneck?"
*   **Expert Answer**: "I would look at three things:
    1.  **Network**: Is the bundle size too large? (Solution: Minification/Gzip).
    2.  **Database**: Are queries missing indexes? (Solution: `explain()` and indexing).
    3.  **CPU**: Is the Node server doing too much math? (Solution: Offload to worker threads or scale horizontally)."

### Question: "A user says they uploaded a profile picture, but it's not showing up. Where do you look?"
*   **Expert Answer**: "I'd check the **Browser Console** first for upload errors (maybe the file was too big). Then I'd check the **Cloudinary dashboard** to see if the file exists. Finally, I'd check the **MongoDB document** to see if the URL field was saved correctly."

---

## 🎯 Key Terms to Drop
- **Stateless/Stateful**: HTTP vs WebSockets.
- **Orchestration**: Managing multiple Docker containers (usually with Kubernetes).
- **Scale Out**: Adding more machines/containers.
- **Latency**: The delay before a transfer of data begins following an instruction.
