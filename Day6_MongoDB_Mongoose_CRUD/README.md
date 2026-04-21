# Day 6: Database Integration & Data Operations 🗄️

Welcome to Day 6! Yesterday, we looked at storing data in JSON files. Today, we step into the professional league by integrating a real, cloud-based database: **MongoDB**. We will learn how to design data "Blueprints" (Schemas) and perform high-speed data operations.

## 📅 Schedule

### ⏰ 9:15 AM – 11:00 AM | Module 1: MongoDB & NoSQL Concepts
Focus: Understanding the flexible world of NoSQL.
- [Module 1 Documentation](Module_1_MongoDB_and_NoSQL.md)
- **Topics**: Collections vs Tables, BSON, and connecting Mongoose to Express.
- **Demos**: `examples/1_mongoose_connection.js`.

### ⏰ 11:15 AM – 1:00 PM | Module 2: Mongoose & CRUD Operations
Focus: The "Bread and Butter" of backend development.
- [Module 2 Documentation](Module_2_Mongoose_and_CRUD.md)
- **Topics**: Defining Schemas, standard CRUD operations (Create, Read, Update, Delete).
- **Demos**: `examples/2_crud_demo.js`.

### ⏰ 11:15 AM – 1:00 PM | Module 3: Validation & Aggregation
Focus: Ensuring data quality and deriving insights.
- [Module 3 Documentation](Module_3_Validation_and_Aggregation.md)
- **Topics**: Schema-level validation, Timestamps, and basic data aggregation.

### ⏰ 2:00 PM – 4:15 PM | Lab: Weather Dashboard Backend
Focus: Building a data-driven weather history system.
- [Lab Project Guide](Module_4_Lab_Weather_Dashboard_Backend.md)
- **Project Folder**: `lab_weather_dashboard/`
- **Goal**: Create an API that logs weather data and allows users to query history and perform basic analytics.

### 🎯 Interview Preparation
- [**Interview Preparation Guide**](Interview_Preparation.md)
- **Focus**: MongoDB Atlas, Mongoose vs MongoDB, and Schema Design.

---

## 🚀 Getting Started

1. **Navigate to the Day 6 folder:**
   ```bash
   cd Day6_MongoDB_Mongoose_CRUD
   ```
2. **Setup the Lab:**
   ```bash
   cd lab_weather_dashboard
   npm install
   # Ensure your .env has MONGO_URI from Day 4!
   npm run dev
   ```

---

## 👨‍🏫 Instructor Demo Guide (Day 6)

### 1. The "Excel vs Lego" Analogy (SQL vs NoSQL)
- **Concept**: Explain flexibility.
- **Point**: "SQL is like a pre-printed Excel sheet—you can't add an extra column easily. MongoDB (NoSQL) is like Legos. If you decide a User needs a 'SocialMediaTag' field halfway through the project, you just add it. No stress."

### 2. The "Remote Wiring" (Atlas)
- **Context**: Use the `MONGO_URI` from Day 4.
- **Demo**: Show the MongoDB Atlas dashboard. Refresh it as you perform a CRUD operation in code.
- **Wow factor**: "Look! We ran a function on our computer, and the data instantly appeared in a cloud server thousands of miles away."

### 3. The "Bouncer" (Validation)
- **Concept**: Mongoose Validation.
- **Story**: "Without validation, anyone can put 'Age: -500' or 'Email: NotAnEmail' in your database. Mongoose is the bouncer at the door. If the data doesn't match the blueprint, it's not getting in."

---

## 🎯 The Day 6 Goal
By the end of today, you will be able to connect any Express app to a **MongoDB** database, design **robust schemas**, and build **reliable APIs** that handle complex data operations.
