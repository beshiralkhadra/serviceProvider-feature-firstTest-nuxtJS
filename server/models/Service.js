// const Sequelize = require("sequelize");
// const { sequelize } = require(".");

// let Service = sequelize.define("Service", {
//   id: {
//     type: Sequelize.INTEGER,
//     allowNull: true,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   service_name: {
//     ///FKey
//     type: Sequelize.STRING,
//     allowNull: true,
//   },
//   category: {
//     type: Sequelize.STRING,
//   },
// });
// srvices.associate = (models) => {
//     services.belongsToMany(models.providers, {
//       foreignKey: 'serviceId',
//       through: 'provider_services',
//       as: 'providers'
//     });
//   };

// User.belongsTo(Provider, { foreignKey: 'provider_id' });

// module.exports = Service;

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      this.belongsToMany(models.Provider, {
        foreignKey: "serviceId",
        through: "provider_services",
        as: "providers",
      });
    }
  }
  Service.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      service_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      category: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Service",
    }
  );
  return Service;
};
