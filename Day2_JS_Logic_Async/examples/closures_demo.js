// Day 2: Closures Demo
// Run this file using command: node Day2_JS_Logic_Async/examples/closures_demo.js

console.log("--- Understanding Closures (The Backpack) ---");

function createGreeter(greeting) {
    // This variable 'greeting' is like an item placed in the function's backpack
    return function(name) {
        // This inner function can access 'greeting' anytime
        return greeting + ", " + name + "!";
    };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");

console.log(sayHello("Sriram")); // Hello, Sriram!
console.log(sayHi("Antigravity")); // Hi, Antigravity!

console.log("\n--- Practical Use: A Counter ---");

function makeCounter() {
    let count = 0; // Private variable inside the backpack
    return function() {
        count = count + 1;
        return "Current Count: " + count;
    };
}

const myCounter = makeCounter();

console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3

// Notice: You cannot access the 'count' variable directly from here!
// console.log(count); // This would crash
console.log("\nClosures help keep data safe and private.");
