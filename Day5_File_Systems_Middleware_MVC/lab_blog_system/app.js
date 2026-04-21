require('dotenv').config();
const express = require('express');
const path = require('path');
const blogRoutes = require('./src/routes/blogRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for Logging
app.use((req, res, next) => {
    console.log(`${new Date().toLocaleTimeString()} - ${req.method} ${req.url}`);
    next();
});

// Setup View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Parser Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/', blogRoutes);

// Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something failed!');
});

app.listen(PORT, () => {
    console.log(`🚀 Blog Server running on http://localhost:${PORT}`);
});
