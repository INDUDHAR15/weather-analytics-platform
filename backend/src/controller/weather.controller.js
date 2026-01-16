const weatherService = require('../services/weather.services');

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
