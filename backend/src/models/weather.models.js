module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Weather",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      city: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      temperature: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      humidity: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      windSpeed: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      recordedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      tableName: "weather_data",
      timestamps: true,
      indexes: [
        { fields: ["city"] },
        { fields: ["recordedAt"] }
      ]
    }
  );
};
