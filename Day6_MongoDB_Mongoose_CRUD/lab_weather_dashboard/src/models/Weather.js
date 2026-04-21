const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    city: {
        type: String,
        required: [true, "City is required"],
        trim: true
    },
    temperature: {
        type: Number,
        required: [true, "Temperature is required"]
    },
    condition: {
        type: String,
        enum: {
            values: ['Sunny', 'Cloudy', 'Rainy', 'Snowy', 'Stormy'],
            message: '{VALUE} is not a valid condition'
        },
        required: true
    },
    humidity: {
        type: Number,
        min: 0,
        max: 100
    },
    windSpeed: {
        type: Number,
        min: 0
    }
}, { timestamps: true });

// Export the model
module.exports = mongoose.model('Weather', weatherSchema);
