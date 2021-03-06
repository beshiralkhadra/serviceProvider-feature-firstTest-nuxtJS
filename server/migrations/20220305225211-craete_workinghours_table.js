"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     */
    await queryInterface.createTable("days", {
      id: {
        type: Sequelize.INTEGER(32),
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      provider_id: {
        ///FKey
        type: Sequelize.INTEGER(32),
        allowNull: true,
      },
      sundayT1: {
        type: Sequelize.STRING,
      },
      sundayT2: {
        type: Sequelize.STRING,
      },
      // off_sunday: {
      //   type: Sequelize.BOOLEAN,
      //   defaultValue: false,
      // },
      mondayT1: {
        type: Sequelize.STRING,
      },
      mondayT2: {
        type: Sequelize.STRING,
      },
      // off_monday: {
      //   type: Sequelize.BOOLEAN,
      //   defaultValue:false,
      // },
      tuesdayT1: {
        type: Sequelize.STRING,
      },
      tuesdayT2: {
        type: Sequelize.STRING,
      },
      // off_tuesday: {
      //   type: Sequelize.BOOLEAN,
      //   defaultValue:false,
      // },
      wednesdayT1: {
        type: Sequelize.STRING,
      },
      wednesdayT2: {
        type: Sequelize.STRING,
      },
      // off_wednesday: {
      //   type: Sequelize.BOOLEAN,
      //   defaultValue:false,
      // },
      thursdayT1: {
        type: Sequelize.STRING,
      },
      thursdayT2: {
        type: Sequelize.STRING,
      },
      // off_thursday: {
      //   type: Sequelize.BOOLEAN,
      //   defaultValue: false,
      // },
      fridayT1: {
        type: Sequelize.STRING,
      },

      fridayT2: {
        type: Sequelize.STRING,
      },
      // off_friday: {
      //   type: Sequelize.BOOLEAN,
      //   defaultValue: false,
      // },

      saturdayT1: {
        type: Sequelize.STRING,
      },
      saturdayT2: {
        type: Sequelize.STRING,
      },
      // off_saturday: {
      //   type: Sequelize.BOOLEAN,
      //   defaultValue:false,
      // },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
