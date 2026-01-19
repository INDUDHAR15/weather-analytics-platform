SELECT
  city,
  ROUND(AVG(temperature)::numeric, 2) AS avg_temp,
  ROUND(AVG(humidity)::numeric, 2) AS avg_humidity,
  COUNT(*) AS records
FROM weather_data
GROUP BY city;
