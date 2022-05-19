// const Sequelize = require("sequelize");
// const { sequelize } = require(".");

// let Provider_Service = sequelize.define("Provider_Service", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   providerId: {
//     type: Sequelize.INTEGER,
//   },
//   serviceId: {
//     type: Sequelize.INTEGER,
//   },
//   service_name: {
//     type: Sequelize.STRING,
//   },
// });
// provider_services.associate = (models) => {
//     provider_services.belongsTo(models.providers, {
//       foreignKey: 'providerId',
//       as: 'provider'
//     });
//     provider_services.belongsTo(models.services, {
//       foreignKey: 'serviceId',
//       as: 'service'
//     });
//   };

// module.exports = Provider_Service;

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Provider_Service extends Model {
    static associate(models) {
      this.belongsTo(models.Provider);
    }
  }
  Provider_Service.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      providerUuid: {
        type: DataTypes.UUID,
      },

      serviceId: {
        type: DataTypes.STRING,
      },
      service_name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Provider_Service",
    }
  );
  return Provider_Service;
};
