const express = require('express');
const router = express.Router();
const weatherController  = require('../controller/weather.controller');

router.post("/", weatherController.createWeather);
router.get('/', weatherController.getWeather);

router.get("/live", weatherController.fetchLiveWeather);

module.exports = router;
