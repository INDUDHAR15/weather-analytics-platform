const service = require('../services/weather.services');

exports.getWeather = async (req, res, next) => {
  try {
    const data = await service.getAll();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};
