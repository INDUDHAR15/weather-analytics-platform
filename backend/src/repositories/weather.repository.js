const db = require('../models');
const Weather = db.Weather;

exports.createWeather = async (payload) => {
  console.log("Weather Model:", Weather);
  return Weather.create(payload);
};

exports.findAllWeather = async () => {
  return Weather.findAll({
    order: [['recordedAt', 'DESC']]
  });
};
