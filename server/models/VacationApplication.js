const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class VacationApplication extends Model {
    static associate(models) {
      this.belongsTo(models.Provider);
    }
  }
  VacationApplication.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      providerName: {
        type: DataTypes.STRING,
      },
      providerUuid: {
        type: DataTypes.UUID,
      },

      date: {
        type: DataTypes.STRING,
      },
      from: {
        type: DataTypes.STRING,
      },
      to: {
        type: DataTypes.STRING,
      },
      requestedDays: {
        type: DataTypes.INTEGER,
      },
      vacationType: {
        type: DataTypes.STRING,
      },
      reason: {
        type: DataTypes.STRING,
      },
      isApproved: {
        type: DataTypes.STRING,
        defaultValue: "on hold",
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: "latest",
      },
    },
    {
      sequelize,
      modelName: "VacationApplication",
    }
  );
  return VacationApplication;
};
