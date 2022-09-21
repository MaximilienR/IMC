const { Sequelize, DataTypes } = require("sequelize");
const userModel = require("../models/userModel");
const WeightModel = require("../models/WeightModel");

const sequelize = new Sequelize("user","root","12345", {
  host: "localhost",
  dialect: "mariadb",
  logging: false
})

const user = userModel(sequelize,DataTypes);
const weight = WeightModel(sequelize,DataTypes)

const initOb = () => {
  return 

}
