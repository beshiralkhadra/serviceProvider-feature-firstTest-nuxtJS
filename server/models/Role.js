// const Sequelize = require("sequelize");
// const { sequelize } = require(".");

// let Role = sequelize.define("Role", {
//   id: {
//     type: Sequelize.INTEGER,
//     allowNull: true,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   role_name: {
//     type: Sequelize.STRING,
//     allowNull: true,
//   },
// });
// Role.associate = (models) => {
//   Role.hasMany(models.Provider);
// };
// srvices.associate = (models) => {
//     services.belongsToMany(models.providers, {
//       foreignKey: 'serviceId',
//       through: 'provider_services',
//       as: 'providers'
//     });
//   };

// User.belongsTo(Provider, { foreignKey: 'provider_id' });

// module.exports = Role;

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      this.hasMany(models.Provider);
    }
  }
  Role.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      role_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Role",
    }
  );
  return Role;
};
