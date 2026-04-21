/**
 * Day 7 Example 1: The CORS Demo
 * 
 * To see the 'Error': Comment out the app.use(cors()) line.
 * Try to fetch this from a browser console on a different port.
 */

const express = require('express');
const cors = require('cors');
const app = express();

// --- THE FIX ---
app.use(cors()); 
// ----------------

app.get('/api/data', (req, res) => {
    res.json({ 
        message: "If you see this, CORS is working!",
        hint: "Check the Network Tab in your browser to see the 'Access-Control-Allow-Origin' header."
    });
});

app.listen(5000, () => {
    console.log("CORS Server running on http://localhost:5000");
    console.log("Try fetching http://localhost:5000/api/data from your React app (Port 3000/5173)");
});
