/**
 * Day 5 Example 2: Middleware Flow Demo
 * Run this and visit http://localhost:3000
 */

const express = require('express');
const app = express();

// 1. Application-level Middleware (Logger)
app.use((req, res, next) => {
    console.log(`[LOG] ${new Date().toLocaleTimeString()}: ${req.method} ${req.url}`);
    next(); // Pass control to next middleare
});

// 2. Custom Middleware - Simulation of Auth
const checkSecretKey = (req, res, next) => {
    const key = req.query.key;
    if (key === 'thevibe') {
        console.log("[AUTH] Key accepted!");
        next();
    } else {
        console.log("[AUTH] Key rejected!");
        res.status(401).send("<h1>Unauthorized: Please provide the correct ?key=...</h1>");
    }
};

// 3. Application-level Middleware - Attaching data
app.use((req, res, next) => {
    req.requestTime = Date.now();
    next();
});

// ROUTES
app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1><p>Visit <a href='/secret?key=thevibe'>/secret</a> to see middleware in action.</p>");
});

// Route with specific middleware
app.get('/secret', checkSecretKey, (req, res) => {
    const diff = Date.now() - req.requestTime;
    res.send(`<h1>Welcome to the Secret Page</h1><p>Request processed in ${diff}ms</p>`);
});

// 4. Error-handling Middleware (Must be last)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000, () => {
    console.log("Middleware demo running on http://localhost:3000");
});
