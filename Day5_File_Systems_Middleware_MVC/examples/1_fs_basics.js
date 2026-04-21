/**
 * Day 5 Example 1: File System (fs) Module
 * Demonstrating Sync vs Async vs Promises
 */

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'test.txt');

// 1. Synchronous - BLOCKING
console.log("--- 1. Sync Start ---");
fs.writeFileSync(filePath, "Hello from Sync!");
const syncData = fs.readFileSync(filePath, 'utf8');
console.log("Sync Content:", syncData);
console.log("--- 1. Sync End ---\n");

// 2. Asynchronous - CALLBACKS (Non-Blocking)
console.log("--- 2. Callback Start ---");
fs.writeFile(filePath, "Hello from Callbacks!", (err) => {
    if (err) return console.log(err);
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return console.log(err);
        console.log("Callback Content:", data);
        console.log("--- 2. Callback End ---\n");
    });
});
console.log("I run BEFORE the callback finishes!");

// 3. Modern Asynchronous - PROMISES & ASYNC/AWAIT
async function runPromises() {
    try {
        console.log("--- 3. Promise Start ---");
        await fsPromises.writeFile(filePath, "Hello from Promises!");
        const data = await fsPromises.readFile(filePath, 'utf8');
        console.log("Promise Content:", data);
        
        // Clean up
        await fsPromises.unlink(filePath);
        console.log("File deleted.");
        console.log("--- 3. Promise End ---\n");
    } catch (err) {
        console.error(err);
    }
}

// Wait a bit to let callback demo finish or show interleaving
setTimeout(runPromises, 1000);
