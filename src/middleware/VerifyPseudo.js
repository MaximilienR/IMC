const  User  = require("../config/sequelize");

checkUpUsername = (req, res, next) => {
  User.findOne({
    where: {
      username: req.body.name,
    },
  }).then((user) => {
    if (user) {
      return res.status(400).send({
        message: "Username is already in use",
      });
    }
  });

  next();
};

module.exports = checkUpUsername;


