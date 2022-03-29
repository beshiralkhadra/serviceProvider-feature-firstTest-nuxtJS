const Sequelize = require("sequelize");
const db = new Sequelize("sqlite:orginal_agentsoncloud_2022.sqlite3");

module.exports = db;
