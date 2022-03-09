'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     */
     await queryInterface.createTable('providers', { 
      id :{
        type : Sequelize.INTEGER(32),
        allowNull:true,
        primaryKey:true,
        autoIncrement:true
   
     
    },
    firstName: {
        type:Sequelize.STRING,
        allowNull: false,
    
    },
    lastName: {
        type:Sequelize.STRING,
        allowNull: false,
    
    },
    email: {
        type:Sequelize.STRING,
        allowNull: false, 
    
    },
    age: {
        type:Sequelize.INTEGER,
        allowNull: false,
    
    },
    password: {
        type:Sequelize.STRING,
        allowNull: false,
    
    },
    gender: {
        type:Sequelize.STRING,
        allowNull: false,
    
    },
    phone: {
        type:Sequelize.STRING,
        allowNull: false,
        unique:true
    
    },
 
    education: {
        type:Sequelize.STRING,
        allowNull: false,
    
    },
    major: {
        type:Sequelize.STRING,
        allowNull: false,
    
    },
    minor: {
        type:Sequelize.STRING,
        allowNull: false,
    
    },
    role: {
        type:Sequelize.STRING,
        allowNull: false,
    
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
      await queryInterface.dropTable('providers');
  }
};
