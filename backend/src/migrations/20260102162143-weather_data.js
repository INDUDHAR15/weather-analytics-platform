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

      windSpeed: {
        type: Sequelize.FLOAT
      },

      weatherCondition: {
        type: Sequelize.STRING
      },

      recordedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },

      source: {
        type: Sequelize.STRING
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      }
    });

    // Indexes for analytics performance
    await queryInterface.addIndex("weather_data", ["city", "recordedAt"]);
    await queryInterface.addIndex("weather_data", ["recordedAt"]);
  },

  async down(queryInterface) {
    await queryInterface.dropTable("weather_data");
  }
};
