const Sequelize = require('sequelize');
const db =require('../db');

    let Service =db.define('Service',{
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
   
  
   
});
// srvices.associate = (models) => {
//     services.belongsToMany(models.providers, {
//       foreignKey: 'serviceId', 
//       through: 'provider_services',
//       as: 'providers' 
//     });
//   };

// User.belongsTo(Provider, { foreignKey: 'provider_id' });


module.exports = Service;