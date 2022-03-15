const Sequelize = require('sequelize');
const db =require('../db');

    let Role =db.define('Role',{
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
   
});
Role.associate = models => {
    Role.hasMany(models.Provider);
  };
// srvices.associate = (models) => {
//     services.belongsToMany(models.providers, {
//       foreignKey: 'serviceId', 
//       through: 'provider_services',
//       as: 'providers' 
//     });
//   };

// User.belongsTo(Provider, { foreignKey: 'provider_id' });


module.exports = Role;