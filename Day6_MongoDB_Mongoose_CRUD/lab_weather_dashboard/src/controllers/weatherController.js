const Weather = require('../models/Weather');

// @desc    Log new weather data
// @route   POST /api/weather
exports.logWeather = async (req, res) => {
    try {
        const weather = await Weather.create(req.body);
        res.status(201).json({
            success: true,
            data: weather
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        });
    }
};

// @desc    Get weather history for a city
// @route   GET /api/weather/:city
exports.getCityHistory = async (req, res) => {
    try {
        const history = await Weather.find({ 
            city: { $regex: new RegExp(req.params.city, 'i') } 
        }).sort('-createdAt');
        
        res.status(200).json({
            success: true,
            count: history.length,
            data: history
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }
};

// @desc    Delete a weather record
// @route   DELETE /api/weather/:id
exports.deleteRecord = async (req, res) => {
    try {
        const record = await Weather.findByIdAndDelete(req.params.id);
        
        if (!record) {
            return res.status(404).json({
                success: false,
                error: "Record not found"
            });
        }
        
        res.status(200).json({
            success: true,
            message: "Record removed successfully"
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: "Invalid ID"
        });
    }
};

// @desc    Get average temp for a city (Aggregation Demo)
// @route   GET /api/weather/:city/stats
exports.getCityStats = async (req, res) => {
    try {
        const stats = await Weather.aggregate([
            { $match: { city: { $regex: new RegExp(req.params.city, 'i') } } },
            {
                $group: {
                    _id: "$city",
                    averageTemp: { $avg: "$temperature" },
                    maxHumidity: { $max: "$humidity" },
                    recordCount: { $sum: 1 }
                }
            }
        ]);

        if (stats.length === 0) {
            return res.status(404).json({
                success: false,
                error: "No data found for this city"
            });
        }

        res.status(200).json({
            success: true,
            data: stats[0]
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: "Aggregation failed"
        });
    }
};
