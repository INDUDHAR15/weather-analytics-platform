"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("weather_data", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      city: {
        type: Sequelize.STRING,
        allowNull: false
      },

      country: {
        type: Sequelize.STRING(5),
        allowNull: false
      },

      temperature: {
        type: Sequelize.FLOAT,
        allowNull: false
      },

      humidity: {
        type: Sequelize.INTEGER
      },

      pressure: {
        type: Sequelize.INTEGER
      },

      wind_speed: {
        type: Sequelize.FLOAT
      },

      weather_condition: {
        type: Sequelize.STRING
      },

      recorded_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      source: {
        type: Sequelize.STRING
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      },

      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      }
    });

    // Indexes for analytics performance
    await queryInterface.addIndex("weather_data", ["city", "recorded_at"]);
    await queryInterface.addIndex("weather_data", ["recorded_at"]);
  },

  // async down(queryInterface) {
  //   await queryInterface.dropTable("weather_data");
  // }
};
