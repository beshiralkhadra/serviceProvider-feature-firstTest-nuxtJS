// providers.associate = (models) => {
//     providers.belongsToMany(models.srvices, {
//       foreignKey: 'providerId',
//       through: 'provider_services',
//       as: 'services'
//     });
//   };
// Provider.hasMany(Day, { foreignKey: 'provider_id' });
// module.exports = Provider;

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Provider extends Model {
    static associate(models) {
      this.belongsTo(models.Role);
      this.hasMany(models.Day, { as: "provider_id" });
      this.hasMany(models.LeaveApplication);
      this.hasMany(models.VacationApplication);
      this.hasMany(models.ProviderAppointments);

      this.belongsToMany(models.Service, {
        foreignKey: "providerId",
        through: "Provider_Service",
        as: "Service",
      });
    }
  }
  Provider.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      education: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      major: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      minor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: "latest",
      },
    },
    {
      sequelize,
      modelName: "Provider",
    }
  );
  return Provider;
};
