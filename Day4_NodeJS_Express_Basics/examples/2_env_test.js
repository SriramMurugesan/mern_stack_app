// 🟢 EXAMPLE 2: Testing Environment Variables
// This demo shows how to use Dotenv to keep secrets safe.

require('dotenv').config();

const port = process.env.PORT || 8080;
const databaseUrl = process.env.MONGO_URI || "NOT_FOUND";

console.log('--- Environment Check ---');
console.log(`Preferred Port: ${port}`);
console.log(`Database URL: ${databaseUrl === "NOT_FOUND" ? "❌ Missing .env file!" : "✅ Found in .env"}`);

if (databaseUrl === "NOT_FOUND") {
    console.log('Show the students that without a .env file, this app stays in the dark.');
    console.log('Then create a .env file and watch this change!');
}
