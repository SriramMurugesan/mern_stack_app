# Module 2: Cloudinary & File Uploads ☁️🖼️

Storing images in a database is a disaster. Instead, we store images on a **Content Delivery Network (CDN)** like Cloudinary and only store the **URL** in our database.

---

## 1. How the Flow Works
1.  **React**: User selects a file and clicks "Upload".
2.  **Express**: Receives the file (using `Multer` middleware).
3.  **Cloudinary**: The file is sent to the cloud.
4.  **Database**: We save the resulting `.png` URL to the user's document.

---

## 2. Server Setup (Multer + Cloudinary)

### 📦 Install
```bash
npm install multer cloudinary multer-storage-cloudinary
```

### 🛠️ Configuration (`src/config/cloudinary.js`)
```javascript
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'mern_bootcamp',
    allowedFormats: ['jpg', 'png', 'jpeg'],
  },
});

module.exports = storage;
```

---

## 3. The Upload Route

```javascript
const express = require('express');
const multer = require('multer');
const storage = require('./config/cloudinary');
const upload = multer({ storage: storage });

const router = express.Router();

// 'profilePic' is the field name from your frontend form
router.post('/upload', upload.single('profilePic'), (req, res) => {
  // If successful, req.file.path contains the Cloudinary URL
  res.json({ 
    message: "Upload success!",
    url: req.file.path 
  });
});
```

---

## 4. Frontend (React)

You MUST use `FormData` to send files via AJAX.

```javascript
const handleUpload = async (e) => {
  const file = e.target.files[0];
  const formData = new FormData();
  formData.append('profilePic', file);

  const { data } = await axios.post('/api/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  
  console.log("Image URL:", data.url);
};
```

---

## 🎯 Task for Students
1. Create a free account at [Cloudinary.com](https://cloudinary.com).
2. Get your credentials and add them to your `.env`.
3. Build a "Post creation" form that allows users to upload an image and a caption.
