const axios = require("axios");

const GEO_BASE = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_BASE = "https://api.open-meteo.com/v1/forecast";

exports.getLocation = async (city) => {
  const { data } = await axios.get(GEO_BASE, {
    params: {
      name: city,
      count: 1
    }
  });

  if (!data.results || !data.results.length) {
    throw new Error("City not found");
  }

  return data.results[0];
};

exports.getCurrentWeather = async (lat, lon) => {
  const { data } = await axios.get(WEATHER_BASE, {
    params: {
      latitude: lat,
      longitude: lon,
      current: [
        "temperature_2m",
        "relative_humidity_2m",
        "wind_speed_10m"
      ].join(",")
    }
  });

  return data.current;
};
