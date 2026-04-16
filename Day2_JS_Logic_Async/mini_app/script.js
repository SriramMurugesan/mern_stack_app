// Day 2 Mini App Logic
// Integrating Variables, Closures, and DOM Manipulation

// --- Part 1: State Management using Closures ---
// The 'counter' variable is protected inside this function (Backpack)
function initCounter() {
    let count = 0;
    
    return function() {
        count = count + 1;
        return count;
    };
}

const getNextCount = initCounter(); // 'getNextCount' is now our counter function

// --- Part 2: DOM Interaction ---
const counterDisplay = document.querySelector("#counter-val");
const incrementBtn = document.querySelector("#inc-btn");
const themeBtn = document.querySelector("#theme-btn");
const body = document.body;
const message = document.querySelector("#msg");

// --- Part 3: Logic Implementation ---

// Handling Increment
incrementBtn.addEventListener("click", () => {
    // 1. Get the new value from the closure
    const newVal = getNextCount();
    
    // 2. Update the UI
    counterDisplay.innerText = newVal;
    
    // 3. Conditional Logic (Basics)
    if (newVal === 10) {
        message.innerText = "Double Digits! You're fast! 🔥";
    } else if (newVal === 20) {
        message.innerText = "Whoa! Unstoppable! 🚀";
    }
});

// Handling Theme Switch
themeBtn.addEventListener("click", () => {
    // .toggle() is a neat way to add/remove a class
    body.classList.toggle("dark");
    
    // Changing button text based on the theme
    if (body.classList.contains("dark")) {
        themeBtn.innerText = "Switch to Light";
    } else {
        themeBtn.innerText = "Switch to Dark";
    }
});

console.log("Mini App Logic Loaded!");
