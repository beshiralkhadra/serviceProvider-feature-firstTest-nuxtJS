const Sequelize =require('sequelize');
const db = new Sequelize('orginal_agentsoncloud_2022','root','',{
    host: "localhost",
   dialect: "mysql"
})
module.exports =db;