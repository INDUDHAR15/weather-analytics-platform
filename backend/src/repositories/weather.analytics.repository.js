const { sequelize } = require("../models");

exports.getSummary = async () => {
  const [result] = await sequelize.query(`
    SELECT 
      ROUND(AVG(temperature)::numeric,2) AS avg_temp,
      MIN(temperature) AS min_temp,
      MAX(temperature) AS max_temp,
      ROUND(AVG(humidity)::numeric,2) AS avg_humidity
    FROM weather_data
  `);
  return result[0];
};

exports.getDailyStats = async () => {
  const [result] = await sequelize.query(`
    SELECT 
      DATE(recordedAt) AS date,
      ROUND(AVG(temperature)::numeric,2) AS avg_temp
    FROM weather_data
    GROUP BY DATE(recordedAt)
    ORDER BY date DESC
  `);
  return result;
};
