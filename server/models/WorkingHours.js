// const Sequelize = require("sequelize");
// const { sequelize } = require(".");

// let Day = sequelize.define("Day", {
//   id: {
//     type: Sequelize.INTEGER,
//     allowNull: true,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   provider_id: {
//     ///FKey
//     type: Sequelize.INTEGER,
//     allowNull: true,
//   },
//   sunday_first: {
//     type: Sequelize.STRING,
//   },
//   sundayT2: {
//     type: Sequelize.STRING,
//   },
//   // off_sunday: {
//   //   type: Sequelize.BOOLEAN,
//   //   defaultValue: "false",
//   // },
//   mondayT1: {
//     type: Sequelize.STRING,
//   },
//   mondayT2: {
//     type: Sequelize.STRING,
//   },
//   // off_monday: {
//   //   type: Sequelize.BOOLEAN,
//   //   defaultValue: "false",
//   // },
//   tuesdayT1: {
//     type: Sequelize.STRING,
//   },
//   tuesdayT2: {
//     type: Sequelize.STRING,
//   },
//   // off_tuesday: {
//   //   type: Sequelize.BOOLEAN,
//   //   defaultValue: "false",
//   // },
//   wednesdayT1: {
//     type: Sequelize.STRING,
//   },
//   wednesdayT2: {
//     type: Sequelize.STRING,
//   },
//   // off_wednesday: {
//   //   type: Sequelize.BOOLEAN,
//   //   defaultValue: "false",
//   // },
//   thursdayT1: {
//     type: Sequelize.STRING,
//   },
//   thursdayT2: {
//     type: Sequelize.STRING,
//   },
//   // off_thursday: {
//   //   type: Sequelize.BOOLEAN,
//   //   defaultValue: "false",
//   // },
//   fridayT1: {
//     type: Sequelize.STRING,
//   },

//   fridayT2: {
//     type: Sequelize.STRING,
//   },
//   // off_friday: {
//   //   type: Sequelize.BOOLEAN,
//   //   defaultValue: "false",
//   // },

//   saturdayT1: {
//     type: Sequelize.STRING,
//   },
//   saturdayT2: {
//     type: Sequelize.STRING,
//   },
//   // off_saturday: {
//   //   type: Sequelize.BOOLEAN,
//   //   defaultValue: "false",
//   // },
// });

// Day.belongsTo(Provider, { foreignKey: 'provider_id' });

// module.exports = Day;

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Day extends Model {
    static associate(models) {
      this.belongsTo(models.Provider, { as: "Provider" });
    }
  }
  Day.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },

      sunday_first: {
        type: DataTypes.STRING,
      },
      sundayT2: {
        type: DataTypes.STRING,
      },

      mondayT1: {
        type: DataTypes.STRING,
      },
      mondayT2: {
        type: DataTypes.STRING,
      },

      tuesdayT1: {
        type: DataTypes.STRING,
      },
      tuesdayT2: {
        type: DataTypes.STRING,
      },

      wednesdayT1: {
        type: DataTypes.STRING,
      },
      wednesdayT2: {
        type: DataTypes.STRING,
      },

      thursdayT1: {
        type: DataTypes.STRING,
      },
      thursdayT2: {
        type: DataTypes.STRING,
      },

      fridayT1: {
        type: DataTypes.STRING,
      },

      fridayT2: {
        type: DataTypes.STRING,
      },

      saturdayT1: {
        type: DataTypes.STRING,
      },
      saturdayT2: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Day",
    }
  );
  return Day;
};
