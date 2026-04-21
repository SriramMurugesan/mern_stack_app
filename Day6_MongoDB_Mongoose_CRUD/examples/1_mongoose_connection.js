/**
 * Day 6 Example 1: Basic Mongoose Connection
 * 
 * 1. Load Environment Variables
 * 2. Connect to MongoDB Atlas
 * 3. Handle connection success/failure
 */

const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/day6_test";

const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(MONGO_URI);
        console.log("✅ MongoDB Connected Successfully!");
        
        // This is where you would usually start your Express server
        // app.listen(3000, ...)
    } catch (err) {
        console.error("❌ Connection Result:", err.message);
        process.exit(1);
    }
};

connectDB();

// Handle graceful shutdown
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log("\nDisconnected from MongoDB. Closing app...");
    process.exit(0);
});
