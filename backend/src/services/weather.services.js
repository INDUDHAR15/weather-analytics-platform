const weatherRepository = require('../repositories/weather.repository');

exports.create = async (payload) => {
  return weatherRepository.createWeather(payload);
};

exports.getAll = async () => {
  return weatherRepository.findAllWeather();
};
