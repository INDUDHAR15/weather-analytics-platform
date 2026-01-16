const { Weather } = require('../models');

exports.createWeather = async (data) => {
  console.log("Weather Model:", Weather);
  return Weather.create(data);
};

exports.findAllWeather = async () => {
  return Weather.findAll({
    order: [['recordedAt', 'DESC']]
  });
};
