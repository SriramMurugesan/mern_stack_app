// Day 2: Event Loop Demo
// Run this file using command: node Day2_JS_Logic_Async/examples/event_loop_demo.js

console.log("1. Starting the script...");

// This task is sent to the 'Callback Queue' to wait for 2 seconds
setTimeout(() => {
    console.log("4. (2 seconds later) Hello from the callback queue! 🐢");
}, 2000);

// This task is sent to the 'Callback Queue' with 0 seconds wait
setTimeout(() => {
    console.log("3. (0 seconds wait) I am still delayed by the event loop! 🐇");
}, 0);

console.log("2. Script ended! (But wait... where are steps 3 and 4?)");

// EXPLANATION:
// Even though Step 3 has 0ms delay, JavaScript finishes ALL code in the 'Stack' (synchronous code)
// before it looks at the 'Queue' (asynchronous code).
