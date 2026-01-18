const cron = require("node-cron");
const weatherLiveService = require("../services/weather.live.services");

// every 10 minutes
cron.schedule("*/10 * * * *", async () => {
  try {
    console.log("⏱ Fetching live weather...");
    await weatherLiveService.fetchAndStoreLiveWeather("Bengaluru");
    console.log("Weather stored successfully");
  } catch (err) {
    console.error("Cron weather error:", err.message);
  }
});
