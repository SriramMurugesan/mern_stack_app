# 03: Full-Stack Deployment Playbook 🚀

Deploying a MERN app means putting your **Frontend (FE)** and **Backend (BE)** on the internet so anyone can use them.

---

## 🗺️ The Strategy
1. **Database**: Use **MongoDB Atlas** (Cloud Database).
2. **Backend**: Use **Render** or **Vercel** (Serverless).
3. **Frontend**: Use **Vercel** or **Netlify**.

---

## 1. Render (Best for Full-Stack)
Render is great because it can run your Node.js server 24/7.

**Steps:**
1. Connect your GitHub.
2. Select **Web Service** for your Backend folder.
3. **Build Command**: `npm install`
4. **Start Command**: `node server.js`
5. **Environment Variables**: Add your `MONGO_URI` and `JWT_SECRET` in the "Env" tab.

---

## 2. Vercel / Netlify (Best for React)
These are optimized for speed and static frontends.

**Steps:**
1. Connect your GitHub.
2. Select your Frontend folder.
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist` (for Vite) or `build` (for Create-React-App).
5. **Environment Variables**: Add `VITE_API_URL` (this will be the URL Render gave you for your backend).

---

## ⚠️ The "Secret Sauce" (CORS)
When you deploy, your Frontend and Backend are on different URLs. Your Backend **must** allow the Frontend to talk to it.

**In your `server.js`:**
```javascript
const cors = require('cors');

app.use(cors({
  origin: "https://your-frontend-link.vercel.app" // Your live frontend URL
}));
```

---

## 📋 Checklist before deploying:
- [ ] Is your `MONGO_URI` using a real database (not `localhost`)?
- [ ] Did you add a `.gitignore` to hide your `.env` file?
- [ ] Are all your `port` settings using `process.env.PORT || 5000`?
