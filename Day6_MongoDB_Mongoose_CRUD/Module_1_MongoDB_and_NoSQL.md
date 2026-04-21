# Module 1: MongoDB & NoSQL Concepts 🍃

Today we transition from storing data in plain text files to a **NoSQL Database**. MongoDB is the most popular database for JavaScript developers because it stores data in a format almost identical to JS objects.

---

## 1. What is NoSQL? (Documents vs. Tables)

In traditional databases (SQL), you have **Tables** with fixed **Columns**. If you want to add a column, you have to change the entire database.

In MongoDB (NoSQL):
- **Collections** replace Tables.
- **Documents** replace Rows.
- **Fields** replace Columns.

### The Document Format (BSON)
MongoDB stores data in **BSON** (Binary JSON). It looks like JSON but supports more data types (like Date and Decimal).

```json
{
  "_id": "643a1...",
  "name": "Sriram",
  "skills": ["Express", "MongoDB"],
  "projects": 12
}
```

---

## 2. Why use an ODM (Mongoose)?

You could talk to MongoDB directly, but it's messy. Instead, we use **Mongoose**—an **Object Data Mapper (ODM)**.

**Mongoose provides:**
1. **Schema**: A blueprint for your data.
2. **Validation**: Ensuring data is correct before it's saved.
3. **Utility**: Faster, cleaner methods for finding and updating data.

---

## 3. Connecting to the Cloud ☁️

### Step 1: Install Mongoose
```bash
npm install mongoose
```

### Step 2: Establish connection
In professional apps, we connect to the database in `app.js` or a dedicated `db.js`.

```javascript
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDB Connected Successfully!");
    } catch (err) {
        console.error("❌ Database Connection Failed:", err.message);
        process.exit(1); // Stop the app if DB fails
    }
};

connectDB();
```

---

## 4. Understanding Atlas Tiers
Students sometimes worry about cost.
- **Free Tier (M0)**: Perfect for learning. Limited storage but includes all features we need.
- **Shared Tier (M10+)**: For small startups.
- **Dedicated Tier**: For large-scale apps with heavy traffic.

---

## 🎯 Task for Students
1. Use the `MONGO_URI` from Day 4.
2. Create a small `db_test.js` script.
3. Successfully connect to your Atlas cluster and log "Success" to the console.
