const express = require('express');
const router = express.Router();
const { 
    logWeather, 
    getCityHistory, 
    deleteRecord,
    getCityStats 
} = require('../controllers/weatherController');

// Routes
router.post('/', logWeather);
router.get('/:city', getCityHistory);
router.get('/:city/stats', getCityStats);
router.delete('/:id', deleteRecord);

module.exports = router;
