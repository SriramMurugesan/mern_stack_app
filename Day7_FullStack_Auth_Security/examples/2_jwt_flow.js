/**
 * Day 7 Example 2: The JWT Flow
 * 
 * Demonstrating how to Sign and Verify a token.
 */

const jwt = require('jsonwebtoken');

const SECRET = "antigravity_secret_123";

// 1. SIGNING (At Login)
const payload = { 
  id: "user_987", 
  role: "admin" 
};

const token = jwt.sign(payload, SECRET, { expiresIn: '1h' });

console.log("--- 1. SIGNED TOKEN ---");
console.log(token);
console.log("-----------------------\n");

// 2. VERIFYING (On every request)
console.log("--- 2. VERIFYING SUCCESS ---");
try {
    const decoded = jwt.verify(token, SECRET);
    console.log("Access Granted!");
    console.log("User ID:", decoded.id);
    console.log("User Role:", decoded.role);
} catch (err) {
    console.log("Auth Failed!");
}
console.log("---------------------------\n");

// 3. VERIFYING FAILURE (Wrong Secret)
console.log("--- 3. VERIFYING FAILURE ---");
try {
    const decoded = jwt.verify(token, "wrong_secret");
    console.log("Access Granted!");
} catch (err) {
    console.log("Auth Failed! Message:", err.message);
}
console.log("----------------------------");
