# Module 1: The File System (FS) Module 📂

Node.js allows you to interact with the computer's file system through the built-in `fs` module. This is essential for logging, storing simple data, or reading configuration files.

## 1. Why learn File Handling?
Before databases (like MongoDB), developers stored data in files. Even today, understanding `fs` is critical for:
- Writing logs (who visited my site?).
- Reading config files (`.json`, `.txt`).
- Managing file uploads (images, profiles).

---

## 2. Sync vs. Async: The Big Choice

Node.js provides two ways to do almost everything: **Blocking** (Synchronous) and **Non-Blocking** (Asynchronous).

### ❌ Synchronous (Sync)
- **What it is**: The code waits for the file to be read before moving to the next line.
- **Why it's bad**: If reading a large file takes 2 seconds, your entire server freezes for 2 seconds. No other user can connect!
- **When to use**: *Never* in a web request. Only during the initial startup of your app.

```javascript
const fs = require('fs');
const data = fs.readFileSync('hello.txt', 'utf8'); // PAUSE...
console.log(data); // This only runs after reading is done.
```

### ✅ Asynchronous (Async)
- **What it is**: Node tells the OS to read the file and gives it a "callback" function to run when finished. The server carries on with other tasks.
- **Why it's good**: Your server stays fast and responsive.

```javascript
fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data); 
});
console.log("I run BEFORE the file is finished reading!");
```

---

## 3. The Modern way: Promises & Async/Await
Using callbacks can lead to "Callback Hell". Modern Node.js provides a cleaner way using `fs/promises`.

```javascript
const fs = require('fs').promises;

async function manageFiles() {
    try {
        // Write to a file
        await fs.writeFile('notes.txt', 'Learning Node is fun!');
        
        // Read from it
        const content = await fs.readFile('notes.txt', 'utf8');
        console.log(content);
        
        // Append data
        await fs.appendFile('notes.txt', '\nAdded this later.');
    } catch (err) {
        console.error("Error managing file:", err);
    }
}

manageFiles();
```

---

## 4. Working with JSON (Storing Data)
Since we are MERN developers, we mostly care about **JSON**.

### Writing JSON:
```javascript
const user = { name: "John", age: 25 };
fs.writeFile('user.json', JSON.stringify(user, null, 2));
```

### Reading JSON:
```javascript
const raw = await fs.readFile('user.json', 'utf8');
const data = JSON.parse(raw);
console.log(data.name); // John
```

---

## 💡 Pro-Tip: Path Module
Never use `'./file.txt'`. Different operating systems (Windows vs Mac) handle paths differently. Always use the built-in `path` module.

```javascript
const path = require('path');
const filePath = path.join(__dirname, 'data', 'users.json');
```

---

## 🎯 Task for Students
Try to create a script that:
1. Asks for a username using `readline`.
2. Checks if `users.json` exists.
3. Adds the username to an array inside that file.
