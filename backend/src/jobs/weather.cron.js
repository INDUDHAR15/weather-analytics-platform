const axios = require('axios');
const { WeatherData } = require('../models');
const { WEATHER_API_BASE_URL, DEFAULT_CITY } = require('../utils/constants');

async function ingestWeatherData() {
  try {
    console.log('Weather ingestion job started');

    const response = await axios.get(WEATHER_API_BASE_URL, {
      params: {
        latitude: 52.52,
        longitude: 13.41,
        hourly: 'temperature_2m,relative_humidity_2m'
      }
    });

    const temperature = response.data.hourly.temperature_2m[0];
    const humidity = response.data.hourly.relative_humidity_2m[0];

    await WeatherData.create({
      city: DEFAULT_CITY,
      temperature,
      humidity
    });

    console.log('Weather data ingested successfully');
  } catch (error) {
    console.error('Weather ingestion failed:', error.message);
  }
}

module.exports = ingestWeatherData;
