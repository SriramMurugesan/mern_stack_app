# Module 4: Lab – Weather Dashboard Backend ⛈️

In this lab, you will build a backend system for a Weather Dashboard. Users will be able to log weather data for different cities and view the history of weather events.

## Project Structure
```text
lab_weather_dashboard/
├── src/
│   ├── models/
│   │   └── Weather.js
│   ├── controllers/
│   │   └── weatherController.js
│   ├── routes/
│   │   └── weatherRoutes.js
├── .env
├── app.js
└── package.json
```

---

## Phase 1: Setup & Environment
1. Create the project folder.
2. Initialize npm: `npm init -y`.
3. Install dependencies: `express mongoose dotenv`.
4. Create a `.env` file with your `MONGO_URI`.

---

## Phase 2: The Model
In `src/models/Weather.js`:
```javascript
const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    city: {
        type: String,
        required: [true, "City is required"],
        trim: true
    },
    temperature: {
        type: Number,
        required: true
    },
    condition: {
        type: String,
        enum: ['Sunny', 'Cloudy', 'Rainy', 'Snowy', 'Stormy'],
        required: true
    },
    humidity: Number,
    windSpeed: Number
}, { timestamps: true });

module.exports = mongoose.model('Weather', weatherSchema);
```

---

## Phase 3: The Controller (Operations)
In `src/controllers/weatherController.js`:
```javascript
const Weather = require('../models/Weather');

// CREATE: Log new weather data
exports.logWeather = async (req, res) => {
    try {
        const weather = await Weather.create(req.body);
        res.status(201).json({ success: true, data: weather });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// READ: Get history for a specific city
exports.getCityHistory = async (req, res) => {
    try {
        const history = await Weather.find({ city: req.params.city }).sort('-createdAt');
        res.status(200).json({ success: true, count: history.length, data: history });
    } catch (err) {
        res.status(500).json({ success: false, error: "Server Error" });
    }
};

// DELETE: Remove a record
exports.deleteRecord = async (req, res) => {
    try {
        await Weather.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: "Record Removed" });
    } catch (err) {
        res.status(404).json({ success: false, error: "Record not found" });
    }
};
```

---

## Phase 4: Integration
1. Define the routes in `src/routes/weatherRoutes.js`.
2. Connect to MongoDB in `app.js`.
3. Test your API using Thunder Client or Postman.

---

## 🚀 Advanced Challenges
1. **Validation**: Add a rule that temperature cannot be lower than -100 or higher than 60.
2. **Aggregation**: Create a route `/history/:city/stats` that returns the **Average Temperature** and **Max Humidity** for that city using `.aggregate()`.
3. **Querying**: Add a feature to find all cities where the condition is 'Rainy'.
