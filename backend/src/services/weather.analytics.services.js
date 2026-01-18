const analyticsRepo = require("../repositories/weather.analytics.repository");

exports.getSummary = async () => {
  return analyticsRepo.getSummary();
};

exports.getDailyStats = async () => {
  return analyticsRepo.getDailyStats();
};
