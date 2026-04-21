# Module 2: Templates & Static Assets 🎨

In the previous module, we learned how to store data. Now, we learn how to **display it** beautifully using View Engines and CSS.

## 1. Static vs. Dynamic Content

- **Static Content**: CSS files, Images (Logos), client-side JS. They stay the same for every user.
- **Dynamic Content**: The content of your blog posts, user profiles, or task lists. They change based on who is logged in or what's in the database.

---

## 2. Setting up EJS (Embedded JavaScript)

**EJS** is a template engine that lets us write standard HTML but inject JavaScript logic inside it.

### Step 1: Install EJS
```bash
npm install ejs
```

### Step 2: Configure Express
You must tell Express to use EJS and where to find your files.
```javascript
const express = require('express');
const app = express();

// Tell Express we are using EJS
app.set('view engine', 'ejs');
// Tell Express that our templates are in the 'views' folder
app.set('views', './views');
```

---

## 3. Rendering a View

Instead of `res.send()`, we now use `res.render()`.

### The Controller (Express)
```javascript
app.get('/', (req, res) => {
    const data = {
        title: "Home Page",
        user: "Sriram"
    };
    res.render('index', data); // renders views/index.ejs
});
```

### The View (`views/index.ejs`)
We use specific tags to write JS inside HTML:
- `<%= ... %>`: Output data (Standard escape).
- `<% ... %>`: Logic only (Loops, If statements).
- `<%- ... %>`: Raw output (Careful! Potential security risk).

```html
<!DOCTYPE html>
<html>
<head>
    <title><%= title %></title>
</head>
<body>
    <h1>Welcome, <%= user %>!</h1>
</body>
</html>
```

---

## 4. Serving Static Content (CSS/Images)

Express doesn't serve files automatically for security reasons. You must use the `express.static` middleware.

### Step 1: Create a public folder
Create a folder named `public` and put a `style.css` inside it.

### Step 2: Enable it in Express
```javascript
app.use(express.static('public'));
```

### Step 3: Link it in your EJS
```html
<link rel="stylesheet" href="/style.css">
<!-- Notice we DON'T put 'public' in the path -->
```

---

## 5. Loops in EJS (Very Important)

This is how we display lists (e.g., all blog posts).

```html
<ul>
    <% posts.forEach(post => { %>
        <li>
            <h3><%= post.title %></h3>
            <p><%= post.content %></p>
        </li>
    <% }); %>
</ul>
```

---

## 🎯 Task for Students
1. Create a `views` folder and an `index.ejs` file.
2. Link a CSS file from the `public` folder.
3. Pass an array of names from your Express route to the EJS file and display them using a loop.
