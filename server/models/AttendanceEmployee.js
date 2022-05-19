const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AttendanceEmployee extends Model {
    static associate(models) {
      this.belongsTo(models.Provider);
    }
  }
  AttendanceEmployee.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      providerUuid: {
        type: DataTypes.UUID,
      },
      providerName: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.STRING,
      },
      checkIn: {
        type: DataTypes.STRING,
      },
      checkOut: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: "present",
      },
    },
    {
      sequelize,
      modelName: "AttendanceEmployee",
    }
  );
  return AttendanceEmployee;
};
