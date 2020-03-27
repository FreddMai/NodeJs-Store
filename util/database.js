const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-guide", "root", "919123", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequelize;
