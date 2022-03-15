'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     */
      await queryInterface.createTable('roles', { 
        id :{
          type : Sequelize.INTEGER(32),
          allowNull:true,
          primaryKey:true,
          autoIncrement:true
     
       
      },
      role_name: {
          type:Sequelize.STRING,
          allowNull:true,
          
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
     await queryInterface.dropTable('roles');
  }
};
