const weatherService = require('../services/weather.services');
const liveService = require("../services/weather.live.services");

exports.createWeather = async (req, res, next) => {
  try {
    const data = await weatherService.create(req.body);

    res.status(201).json({
      success: true,
      message: "Weather data created",
      data
    });
  } catch (err) {
    next(err);
  }
};


exports.getWeather = async (req, res, next) => {
  try {
    const data = await weatherService.getAll();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

exports.fetchLiveWeather = async (req, res, next) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({
        success: false,
        message: "City is required"
      });
    }

    const data = await liveService.fetchAndStoreLiveWeather(city);

    res.json({
      success: true,
      data
    });
  } catch (err) {
    next(err);
  }
};