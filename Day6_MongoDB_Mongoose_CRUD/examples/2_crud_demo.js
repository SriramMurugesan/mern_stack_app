/**
 * Day 6 Example 2: CRUD Operations Demo
 * 
 * This script demonstrates the 4 basic operations using a 'Fruit' model.
 * 1. Create a Fruit
 * 2. Find Fruits
 * 3. Update a Fruit
 * 4. Delete a Fruit
 */

const mongoose = require('mongoose');

// 1. Setup local testing URI (or use Atlas)
const URI = "mongodb://localhost:27017/crud_demo";

// 2. Define Schema
const fruitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: String,
    stock: Number
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const runDemo = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected...");

        // --- CREATE ---
        const apple = await Fruit.create({ name: "Apple", color: "Red", stock: 10 });
        console.log("1. Created:", apple.name);

        // --- READ ---
        const fruits = await Fruit.find({ color: "Red" });
        console.log("2. Found:", fruits.length, "red fruits.");

        // --- UPDATE ---
        const updated = await Fruit.findOneAndUpdate(
            { name: apple.name }, 
            { stock: 15 },
            { new: true } // Returns the modified document
        );
        console.log("3. Updated Stock:", updated.stock);

        // --- DELETE ---
        await Fruit.deleteOne({ name: apple.name });
        console.log("4. Deleted successfully.");

    } catch (err) {
        console.error("Demo failed:", err.message);
    } finally {
        await mongoose.connection.close();
    }
};

runDemo();
