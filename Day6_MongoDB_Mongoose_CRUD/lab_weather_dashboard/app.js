require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const weatherRoutes = require('./src/routes/weatherRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB connected');
    } catch (err) {
        console.error('❌ Connection error:', err.message);
        process.exit(1);
    }
};

connectDB();

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing
app.use('/api/weather', weatherRoutes);

// Base Route
app.get('/', (req, res) => {
    res.send('<h1>Weather Dashboard API</h1><p>Use /api/weather to interact with the backend.</p>');
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
