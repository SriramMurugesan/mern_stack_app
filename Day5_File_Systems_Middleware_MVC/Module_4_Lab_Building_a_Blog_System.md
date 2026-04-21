# Module 4: Lab – Building a File-Based Blog System 📝

In this lab, you will build a functional blog application that allows users to view, read, and create posts. Instead of a database, you will use a `json` file to store the blog data.

## Project Structure
```text
lab_blog_system/
├── public/                 # For CSS/Images
│   └── css/style.css
├── src/
│   ├── controllers/
│   │   └── blogController.js
│   ├── routes/
│   │   └── blogRoutes.js
├── views/                  # For EJS Templates
│   ├── index.ejs
│   └── post.ejs
├── data/
│   └── posts.json          # Our "Database"
├── app.js
└── package.json
```

---

## Phase 1: Setup
1. Create the project folder.
2. Initialize npm: `npm init -y`.
3. Install dependencies: `npm install express ejs`.
4. Create the initial `posts.json` in a `data/` folder:
```json
[
  {
    "id": 1,
    "title": "Welcome to my Blog",
    "content": "This is my very first post stored in a JSON file!"
  }
]
```

---

## Phase 2: The Logic (Model & Controller)

### Step 1: Create `blogController.js`
This file will handle the logic of reading from the JSON file.

```javascript
const fs = require('fs').promises;
const path = require('path');

const dataPath = path.join(__dirname, '../../data/posts.json');

exports.getAllPosts = async (req, res) => {
    try {
        const data = await fs.readFile(dataPath, 'utf8');
        const posts = JSON.parse(data);
        res.render('index', { posts });
    } catch (err) {
        res.status(500).send("Error reading posts");
    }
};

exports.getPostById = async (req, res) => {
    try {
        const data = await fs.readFile(dataPath, 'utf8');
        const posts = JSON.parse(data);
        const post = posts.find(p => p.id === parseInt(req.params.id));
        if (post) {
            res.render('post', { post });
        } else {
            res.status(404).send("Post not found");
        }
    } catch (err) {
        res.status(500).send("Error fetching post");
    }
};
```

---

## Phase 3: The Routes
In `src/routes/blogRoutes.js`:
```javascript
const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/', blogController.getAllPosts);
router.get('/post/:id', blogController.getPostById);

module.exports = router;
```

---

## Phase 4: The View (UI)
In `views/index.ejs`:
```html
<h1>My Personal Blog</h1>
<div class="posts">
    <% posts.forEach(post => { %>
        <article>
            <h2><%= post.title %></h2>
            <a href="/post/<%= post.id %>">Read More</a>
        </article>
    <% }); %>
</div>
```

---

## Phase 5: Putting it together
In `app.js`:
```javascript
const express = require('express');
const app = express();
const blogRoutes = require('./src/routes/blogRoutes');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', blogRoutes);

app.listen(3000, () => console.log("Blog running on http://localhost:3000"));
```

---

## 🚀 Advanced Challenges (For 5-Star Students)
1. **Create Feature**: Add a route and a view with a form to add a *new* blog post.
2. **Persistence**: Use `fs.writeFile` to save the new post back into `posts.json`.
3. **Styling**: Make it look like a modern blog using the CSS skills from Day 1.
