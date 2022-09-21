const { Sequelize, DataTypes } = require("sequelize");
const userModel = require("../models/userModel");
const WeightModel = require("../models/WeightModel");
const users = require('../data/user.json')
const weights = require('../data/weight.json')


const sequelize = new Sequelize("user","foo","12345", {
  host: "localhost",
  dialect: "mariadb",
  logging: false
})

const User = userModel(sequelize,DataTypes);
const Weight = WeightModel(sequelize,DataTypes)

const initOb = () => {
  return sequelize.sync({force : true }).then(_ => {
    users.map( user => {
      User.create({
        name: user.name,
        password : user.password,
        age : user.age,
        taille: user.taille
      })
    })
    weights.map(weight => {
      Weight.create({
        weight : weight.weight,
        owner :  weight.owner
      })
    })
    console.log("La base de donnée a bien été initialisé")
  })

}

module.exports = {
  initOb, User, Weight
}
