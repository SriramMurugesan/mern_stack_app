// 🟢 EXAMPLE 3: Routing & Parameters
// This demo shows how to grab data from the URL.

const express = require('express');
const app = express();

// Simple Route
app.get('/', (req, res) => {
    res.send('Welcome to the Routing Demo! Try going to /greet/yourname');
});

// Route with a Parameter (:name)
app.get('/greet/:name', (req, res) => {
    const userName = req.params.name;
    res.status(200).json({
        message: `Hello, ${userName}!`,
        note: "This data was pulled from the URL segment after /greet/"
    });
});

// Route with Query Strings (?category=books)
app.get('/search', (req, res) => {
    const category = req.query.category;
    res.send(`You are searching for items in the category: ${category}`);
});

app.listen(4000, () => console.log('Routing demo on http://localhost:4000'));
