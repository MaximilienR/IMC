const  User  = require("../config/sequelize");

checkUpUsername = (req, res, next) => {
  User.findOne({
    where: {
      name: req.body.name,
    },
  }).then((user) => {
    if (user) {
      return res.status(400).send({
        message: "name is already in use",
      });
    }
  });

  next();
};

module.exports = checkUpUsername;


