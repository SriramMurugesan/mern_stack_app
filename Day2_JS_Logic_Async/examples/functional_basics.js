// Day 2: Functional Programming Basics
// Run this file using command: node Day2_JS_Logic_Async/examples/functional_basics.js

console.log("--- Working with Arrays (The Modern Way) ---");

const users = [
    { name: "Sriram", age: 24 },
    { name: "Alice", age: 17 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 15 }
];

console.log("Original Users:", users.map(u => u.name).join(", "));

// 1. .filter() - Finding only adults (age >= 18)
const adults = users.filter(user => user.age >= 18);
console.log("\nAdults only:", adults.map(u => u.name).join(", "));

// 2. .map() - Creating a list of just names in Uppercase
const namesUpper = users.map(user => user.name.toUpperCase());
console.log("\nNames in Uppercase:", namesUpper.join(", "));

// 3. .reduce() - Calculating the total age
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
const averageAge = totalAge / users.length;
console.log("\nAverage Age:", averageAge);

console.log("\nFunctional programming is cleaner than using 'for' loops!");
