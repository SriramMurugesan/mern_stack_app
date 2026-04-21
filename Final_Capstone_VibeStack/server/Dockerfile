# --- DOCKERFILE (Day 8: Deployment & DevOps) ---

# 1. Start from a lightweight Node.js image (Day 8)
FROM node:18-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package files first to optimize build cache (Expert DevOps Practice)
COPY package*.json ./

# 4. Install production dependencies only (Day 8)
RUN npm install --production

# 5. Copy the rest of the application code (Source files, EJS templates, etc.)
COPY . .

# 6. Documentation: Inform Docker that the app uses port 5000 (Day 4/8)
EXPOSE 5000

# 7. Final command to start the server (Day 4: NodeJS Runtime)
CMD ["node", "app.js"]
