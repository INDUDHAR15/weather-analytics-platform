const router = require('express').Router();
const controller = require('../controller/weather.controller');

router.get('/', controller.getWeather);

module.exports = router;
