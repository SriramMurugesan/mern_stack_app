# Module 2: Async Mastery ⏳

Ever wonder how a website can wait for data from a server without freezing? That is the power of **Asynchronous JavaScript**.

---

## 1. The Event Loop: How JS "Multi-tasks"
JavaScript is single-threaded (it can only do one thing at a time). However, it uses the **Event Loop** to handle waiting.

- **Call Stack**: Where code runs right now.
- **Callback Queue**: Where tasks wait to run (like waiting for a timer or an API).
- **Event Loop**: It checks: "Is the Stack empty? Yes? Then bring in the next task from the Queue."

---

## 2. Promises: A "Vow" for Data 🤝
A Promise is an object that represents a value that might be available **now, later, or never**.
It has 3 states:
1. **Pending**: Still waiting.
2. **Fulfilled (Resolved)**: Success! We got the data.
3. **Rejected**: Something went wrong (e.g., No internet).

```javascript
const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Data Loaded!");
    } else {
        reject("Error!");
    }
});

myPromise
    .then(data => console.log(data))
    .catch(err => console.error(err));
```

---

## 3. Fetch API: Getting Real Data 🌐
We use `fetch()` to talk to APIs (other servers).

```javascript
fetch("https://api.github.com/users/octocat")
    .then(response => response.json()) // Convert to JS Object
    .then(data => console.log(data.name))
    .catch(error => console.log("Failed to fetch"));
```

---

## 4. Async / Await: The Modern Way ✨
`async/await` is just a prettier way to write Promises. It makes async code look like synchronous (stable) code.

```javascript
async function getUserData() {
    try {
        const response = await fetch("https://api.github.com/users/octocat");
        const data = await response.json();
        console.log("User:", data.login);
    } catch (error) {
        console.log("Something went wrong!");
    }
}

getUserData();
```

---

## 🧪 Quick Lab: Non-Blocking Code
1. Open `examples/event_loop_demo.js`.
2. Notice how the code doesn't wait for the `setTimeout` to finish before moving to the next line.
3. Run it: `node Day2_JS_Logic_Async/examples/event_loop_demo.js`.
