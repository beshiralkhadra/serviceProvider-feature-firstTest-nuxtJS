'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     */
      await queryInterface.createTable('services', { 
        id :{
          type : Sequelize.INTEGER(32),
          allowNull:true,
          primaryKey:true,
          autoIncrement:true
     
       
      },
      service_name: {
          ///FKey
          type:Sequelize.STRING,
          allowNull:true,
          
      },
      category: {
          type:Sequelize.STRING,
  
      
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
      await queryInterface.dropTable('services');
  }
};
