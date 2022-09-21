
const { User } = require("../config/sequelize")




exports.createUser = (req,res) => {
  User.create(req.body).then((user) => {
    const message = ` L'utilisateur ${ req.body.name} a bien été crée `
    res.json({message, data : user})
  })
}
