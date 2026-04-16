// Day 2: Promises & Fetch Demo
// Run this file using command: node Day2_JS_Logic_Async/examples/promises_fetch_demo.js

console.log("--- 1. Simple Promise ---");

const checkWifi = new Promise((resolve, reject) => {
    let connected = true;
    setTimeout(() => {
        if (connected) {
            resolve("WiFi Connected! ✅");
        } else {
            reject("No Internet! ❌");
        }
    }, 1000);
});

checkWifi
    .then(status => console.log(status))
    .catch(error => console.log(error));

console.log("--- 2. Fetching from Real API (using Async/Await) ---");

async function getGithubUser(username) {
    try {
        console.log(`Searching for ${username}...`);
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) {
            throw new Error("User not found!");
        }

        const data = await response.json();
        console.log(`Success! Name: ${data.name}, Followers: ${data.followers}`);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// Calling the async function
getGithubUser("SriramMurugesan");
getGithubUser("non-existent-user-123456789");
