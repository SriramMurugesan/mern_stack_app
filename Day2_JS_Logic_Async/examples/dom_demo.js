// Day 2: DOM Manipulation basics
// Open 'dom_demo.html' in your browser to see this working!

// 1. Selecting elements from the HTML
const title = document.querySelector("#main-title");
const description = document.querySelector("#description");
const btn = document.querySelector("#magic-btn");

// 2. Changing content and styles with code
title.innerText = "DOM Manipulation 101";
title.style.fontSize = "24px";

// 3. Adding an Event Listener
let clickCount = 0;

btn.addEventListener("click", () => {
    clickCount = clickCount + 1;
    
    // Changing the description text
    description.innerText = `You have clicked the button ${clickCount} times!`;
    
    // Changing UI based on logic
    if (clickCount >= 5) {
        description.style.color = "green";
        description.innerText += " You are a pro! 🚀";
        btn.innerText = "Wow! Click more!";
    }
    
    // Adding a fun effect: Random background color
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
});

console.log("JS script linked and running!");
