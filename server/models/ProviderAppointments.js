const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProviderAppointments extends Model {
    static associate(models) {
      this.belongsTo(models.Provider);
    }
  }
  ProviderAppointments.init(
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
      date: {
        type: DataTypes.STRING,
      },
      from: {
        type: DataTypes.STRING,
      },
      to: {
        type: DataTypes.STRING,
      },

      appointmentId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "ProviderAppointments",
    }
  );
  return ProviderAppointments;
};
