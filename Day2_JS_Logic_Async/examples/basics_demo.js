// Day 2: JavaScript Basics Demo
// Run this file using command: node Day2_JS_Logic_Async/examples/basics_demo.js

console.log("--- 1. Variables and Data Types ---");

let studentName = "Sriram";
const birthYear = 2000;
let isLearningJS = true;

console.log("Name:", studentName);
console.log("Birth Year:", birthYear);
console.log("Learning JS?", isLearningJS);

// Changing a 'let' variable
studentName = "Sriram Murugesan";
console.log("Updated Name:", studentName);

console.log("\n--- 2. Mathematical Operations ---");
let apples = 10;
let oranges = 5;
let totalFruit = apples + oranges;
console.log("Total Fruit:", totalFruit);

console.log("\n--- 3. Simple Logic (if/else) ---");
let age = 20;

if (age >= 18) {
    console.log("Result: You are an adult! 🍺");
} else {
    console.log("Result: You are a minor. 🥤");
}

console.log("\n--- 4. Functions ---");
function calculateSquare(number) {
    return number * number;
}

let myNumber = 4;
console.log("The square of", myNumber, "is", calculateSquare(myNumber));

console.log("\n--- SUCCESS! You've run your first JS script! ---");
