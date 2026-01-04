"use strict";

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    await queryInterface.bulkInsert(
      "weather_data",
      [
        {
          city: "Bengaluru",
          country: "IN",
          temperature: 28.5,
          humidity: 65,
          pressure: 1012,
          wind_speed: 3.5,
          weather_condition: "Clouds",
          recorded_at: new Date(now.getTime() - 3600 * 1000),
          source: "Seeder",
          created_at: now,
          updated_at: now
        },
        {
          city: "Bengaluru",
          country: "IN",
          temperature: 27.9,
          humidity: 70,
          pressure: 1011,
          wind_speed: 2.8,
          weather_condition: "Rain",
          recorded_at: new Date(now.getTime() - 7200 * 1000),
          source: "Seeder",
          created_at: now,
          updated_at: now
        },
        {
          city: "Mumbai",
          country: "IN",
          temperature: 30.2,
          humidity: 78,
          pressure: 1009,
          wind_speed: 4.1,
          weather_condition: "Clear",
          recorded_at: new Date(now.getTime() - 3600 * 1000),
          source: "Seeder",
          created_at: now,
          updated_at: now
        }
      ],
      {}
    );
  },

  // async down(queryInterface) {
  //   await queryInterface.bulkDelete("weather_data", {
  //     source: "Seeder"
  //   });
  // }
};
