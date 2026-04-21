# Module 1: The Full Stack Bridge 🌐

Connecting a Frontend to a Backend is the defining skill of a MERN Stack Developer. This is where your React app (Client) starts talking to your Node/Express app (Server).

---

## 1. Client-Server Architecture

Think of it as two different machines (even if they both run on your laptop):
- **React (Client)**: Runs in the user's browser. Port 5173 or 3000.
- **Express (Server)**: Runs on the server. Port 5000.

They communicate via **HTTP Requests** using standard formats like **JSON**.

---

## 2. The CORS Nightmare (and how to fix it) 🦇

**CORS** (Cross-Origin Resource Sharing) is a security feature in browsers. It blocks requests from `localhost:5173` to `localhost:5000` because they have different port numbers (origins).

### The Error:
`Access to fetch at '...' from origin '...' has been blocked by CORS policy.`

### The Solution:
On the **Server**, install and use the `cors` middleware:
```bash
npm install cors
```

```javascript
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // This allows ALL origins (good for development)
```

---

## 3. Data Fetching Pattern in React

In Day 3, we used `useEffect`. Now, we use it to talk to our own API.

### 📦 Install Axios
```bash
npm install axios
```

### 🛠️ The Code:
```javascript
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tasks');
        setData(response.data);
      } catch (err) {
        console.error("Connection failed!");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map(item => <p key={item._id}>{item.title}</p>)}
    </div>
  );
}
```

---

## 4. Professional Tip: The `.env` Bridge

Static URLs like `http://localhost:5000` are bad because they change when you deploy (e.g., to Vercel/Render).

**In React (`.env`):**
```env
VITE_API_URL=http://localhost:5000
```

**In React Code:**
```javascript
const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/tasks`);
```

---

## 🎯 Task for Students
1. Open your React app from Day 3 and your Express app from Day 6.
2. Install `cors` on the server and `axios` on the client.
3. Successfully fetch your Weather/Task records and display them in a React component.
