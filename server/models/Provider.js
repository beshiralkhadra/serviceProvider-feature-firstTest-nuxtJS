const Sequelize = require('sequelize');
const db =require('../db');

let Client =db.define('Provider',{
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
},
);
// providers.associate = (models) => {
//     providers.belongsToMany(models.srvices, {
//       foreignKey: 'providerId', 
//       through: 'provider_services',
//       as: 'services' 
//     });
//   };
// Provider.hasMany(Day, { foreignKey: 'provider_id' });
module.exports = Client;