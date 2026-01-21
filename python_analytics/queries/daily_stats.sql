SELECT
        city,
        DATE(recorded_at) AS day,
        ROUND(AVG(temperature)::numeric, 2) AS avg_temp,
        ROUND(AVG(humidity)::numeric, 2) AS avg_humidity,
        ROUND(AVG(wind_speed)::numeric, 2) AS avg_wind_speed,
        COUNT(*) AS records
    FROM weather_data
    GROUP BY city, DATE(recorded_at)
    ORDER BY day DESC, city;