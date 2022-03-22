const Sequelize = require("sequelize");
const db = new Sequelize({
  host: "localhost",
  storage: "orginal_agentsoncloud_2022.sqlite3",
  dialect: "sqlite",
});

module.exports = db;
