const Sequelize = require('sequelize');
const db =require('../db');

    let Provider_Service =db.define('Provider_Service',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          providerId: {
            type: Sequelize.INTEGER,
          },
          serviceId: {
            type: Sequelize.INTEGER,
          },
          service_name: {
            type: Sequelize.STRING,
          },
   
  
   
});
// provider_services.associate = (models) => {
//     provider_services.belongsTo(models.providers, { 
//       foreignKey: 'providerId', 
//       as: 'provider' 
//     });
//     provider_services.belongsTo(models.services, { 
//       foreignKey: 'serviceId', 
//       as: 'service' 
//     });
//   };
 



module.exports = Provider_Service;