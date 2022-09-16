const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("user","root","12345", {
  host: "localhost",
  dialect: "mariadb",
  logging: false
})


