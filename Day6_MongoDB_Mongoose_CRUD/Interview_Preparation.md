# Interview Preparation: MongoDB & Data Operations 🎓

Mastering databases is critical for backend interviews. Use this guide to prepare for frequently asked questions about MongoDB and Mongoose.

---

## 🚀 Top 5 Interview Questions

### 1. What is the difference between SQL and NoSQL?
*   **Answer**: 
    *   **SQL (Relational)**: Uses tables with fixed schemas. Great for complex relationships and ACID compliance. (e.g., PostgreSQL, MySQL).
    *   **NoSQL (Non-Relational)**: Uses documents (like JSON) with flexible schemas. Great for scalability, speed, and evolving data models. (e.g., MongoDB, Redis).

### 2. What is Mongoose and why do we use it?
*   **Answer**: Mongoose is an **Object Data Mapper (ODM)** for MongoDB and Node.js. It provides a schema-based solution to model application data, handles validation, and offers a cleaner API than the native MongoDB driver.

### 3. What is a "Schema" and a "Model" in Mongoose?
*   **Answer**: 
    *   **Schema**: The blueprint that defines the structure, data types, and validation rules for a collection.
    *   **Model**: A constructor compiled from a Schema. An instance of a model is a **Document** which can be saved and retrieved from the database.

### 4. How do you handle validation in Mongoose?
*   **Answer**: Validation is defined within the Schema. You can use built-in validators like `required`, `min`, `max`, `enum`, and `match`, or create custom validators using a function.
*   **Follow-up**: "What happens if validation fails?" -> Mongoose throws a `ValidationError` and the document is not saved.

### 5. What are Mongoose Virtuals? (Advanced)
*   **Answer**: Virtuals are document properties that you can get and set but that do not get persisted to MongoDB. For example, joining a `firstName` and `lastName` field into a `fullName` virtual.

---

## 💡 Scenario-Based Questions

### Question: "When should I use MongoDB over a SQL database?"
*   **Answer**: Use MongoDB when your data structure is likely to change frequently, when you need to store large amounts of unstructured data (like logs or social media posts), or when you need high horizontal scalability (sharding).

### Question: "How would you find all users who joined in the last 7 days?"
*   **Answer**: "I would use the `createdAt` timestamp (enabled via `{ timestamps: true }`) and perform a query using the `$gte` (greater than or equal to) operator."
*   **Code**: `User.find({ createdAt: { $gte: sevenDaysAgo } })`.

---

## 🎯 Key Terms to Drop
- **BSON**: Binary JSON, the storage format for MongoDB.
- **Aggregation Pipeline**: A framework for data processing and transformation.
- **Indexing**: A way to make queries faster (like an index in a book).
- **Atomic Operations**: Operations that happen completely or not at all.
