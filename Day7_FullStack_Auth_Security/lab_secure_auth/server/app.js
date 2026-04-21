require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');

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

// Middleware
app.use(cors()); // Enable CORS for the React frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing
app.use('/api/auth', authRoutes);

// Root
app.get('/', (req, res) => {
    res.send('<h1>Secure Auth API</h1>');
});

// Global Error Handler
app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        success: false,
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : null
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Auth Server running on http://localhost:${PORT}`);
});
