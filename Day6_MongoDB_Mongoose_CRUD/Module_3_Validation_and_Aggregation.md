# Module 3: Validation & Aggregation 🛡️📈

In this module, we move from simple CRUD to advanced features that make our applications production-ready: **Validation** and **Aggregation**.

---

## 1. Schema-Level Validation

Validation prevents bad data from entering your database. If the data doesn't match your rules, Mongoose throws an error.

### Common Validation Rules:
```javascript
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        trim: true,
        minLength: 3
    },
    age: {
        type: Number,
        min: [18, "You must be at least 18"],
        max: 100
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'editor'], // Only these values allowed
        default: 'user'
    }
});
```

---

## 2. Timestamps

Ever wanted to know exactly when a record was created or updated? Mongoose does this effortlessly.

```javascript
const schema = new mongoose.Schema({
    content: String
}, { timestamps: true });

// This adds 'createdAt' and 'updatedAt' fields automatically!
```

---

## 3. Basic Aggregation (The "Math" of Databases)

Aggregation allows you to perform calculations on your data, like finding averages or totals.

### Example: Average Temperature
If we have a `Weather` collection:
```javascript
const stats = await Weather.aggregate([
    { $match: { city: "Hyderabad" } }, // Step 1: Filter
    { $group: { 
        _id: "$city", 
        avgTemp: { $avg: "$temperature" } 
    } } // Step 2: Calculate Average
]);

console.log(stats); // [{ _id: "Hyderabad", avgTemp: 32 }]
```

---

## 4. Why Validate on the Server?
Students often ask: "Can't I just validate in the React app?"
- **Answer**: No! Anyone can bypass your React app and send a manual request (using Postman) to your API. Your server is the **Last Line of Defense**.

---

## 🎯 Task for Students
1. Update your `Product` schema to include `required` and `min` value for price.
2. Try to save a product with a negative price and watch it fail.
3. Use the `timestamps: true` option in your schema.
