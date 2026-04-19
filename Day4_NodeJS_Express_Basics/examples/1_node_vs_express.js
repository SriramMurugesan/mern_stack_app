// 🟢 EXAMPLE 1: Comparing Vanilla Node.js vs Express
// This demo shows why we use Express for building servers.

// --- THE VANILLA NODE.JS WAY (Complexity: High) ---
/*
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello from Vanilla Node!');
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});
server.listen(3001, () => console.log('Vanilla server on 3001'));
*/

// --- THE EXPRESS WAY (Complexity: low, Readability: High) ---
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express! 🚀');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Express server is running on http://localhost:${PORT}`);
    console.log('Notice how much cleaner the code looks!');
});
