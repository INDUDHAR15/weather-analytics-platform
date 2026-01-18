const { getLocation, getCurrentWeather } = require("../clients/openMeteo.client");

const weatherRepo = require("../repositories/weather.repository");

exports.fetchAndStoreLiveWeather = async (city) => {
  // 1. Get city + country + coords
  const location = await getLocation(city);

  // 2. Get weather
  const weather = await getCurrentWeather(
    location.latitude,
    location.longitude
  );

  // 3. Normalize into DB shape
  const payload = {
    city: location.name,
    country: location.country,
    temperature: weather.temperature_2m,
    humidity: weather.relative_humidity_2m,
    windSpeed: weather.wind_speed_10m,
    recordedAt: new Date(weather.time)
  };

  // 4. Save
  return weatherRepo.createWeather(payload);
};
