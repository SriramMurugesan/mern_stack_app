# Module 3: Deployment & Docker 🚢🌍

Your app is finished. Your friends want to see it. But you can't just give them your `localhost:3000`. We need to host it on a public server.

---

## 1. Professional Deployment Strategy

- **Vercel**: The best place for the **React Frontend**. It handles SSL, CDN, and auto-deployments from GitHub.
- **Render / Railway**: Great for the **Node.js Backend**. They automatically restart your server if it crashes.
- **MongoDB Atlas**: Our database is already in the cloud!

---

## 2. Environment Variables in Production

In development, we use `.env`. In production, we **never** ship the `.env` file. 

Instead, you must manually add your keys (like `MONGO_URI`, `JWT_SECRET`) to the **Settings/Environment Variables** tab of your hosting provider (Vercel or Render).

---

## 3. Intro to Docker (The Container)

Docker solves the problem: "But it worked on my machine!" 

A **Docker Image** is a snapshot of your app, including the OS, the version of Node, and all your dependencies.

### Basic `Dockerfile` for Express:
```dockerfile
# Choose an OS with Node installed
FROM node:18-alpine

# Set the working folder
WORKDIR /app

# Copy package files and install
COPY package*.json ./
RUN npm install --production

# Copy the rest of the code
COPY . .

# Start the app
CMD ["npm", "start"]
```

### Useful Commands:
```bash
# Build the image
docker build -t my-mern-app .

# Run the container
docker run -p 5000:5000 my-mern-app
```

---

## 4. Production Checkpoint: The "Build" Step

Before deploying React, you must run:
```bash
npm run build
```
This turns your hundreds of `.jsx` files into a few tiny, optimized `.html` and `.js` files that any browser can load instantly. Vercel does this for you automatically when you push to GitHub!

---

## 🎯 Task for Students
1. Push your final code to a **GitHub** repository.
2. Link your repository to **Vercel** (Frontend) and **Render** (Backend).
3. Update your React `.env` on Vercel to point to your new **Render URL** instead of `localhost`.
