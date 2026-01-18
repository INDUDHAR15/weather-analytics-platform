const analyticsService = require("../services/weather.analytics.services");

exports.summary = async (req, res) => {
  const data = await analyticsService.getSummary();
  res.json({ success: true, data });
};

exports.daily = async (req, res) => {
  const data = await analyticsService.getDailyStats();
  res.json({ success: true, data });
};
