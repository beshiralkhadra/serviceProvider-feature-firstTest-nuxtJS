const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BalanceProvider extends Model {
    static associate(models) {
      this.belongsTo(models.Provider);
    }
  }
  BalanceProvider.init(
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
      sickBalance: {
        type: DataTypes.NUMBER,
        defaultValue: "14",
      },
      annualBalance: {
        type: DataTypes.NUMBER,
        defaultValue: "14",
      },
      leaveBalance: {
        type: DataTypes.INTEGER,
        defaultValue: "0",
      },
    },
    {
      sequelize,
      modelName: "BalanceProvider",
    }
  );
  return BalanceProvider;
};
