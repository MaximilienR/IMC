
const { User } = require("../config/sequelize")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const fs = require("fs")

const saveUser = (data) => {
  fs.writeFileSync("/data/user.json", JSON.stringify(data), "utf-8")
}


exports.createUser = (req,res) => {
 try {
  let { name, password, age, taille} = req.body
  bcrypt.hash(password,10).then((password) => {
    User.create({
      name : name,
      password : password,
      age : age,
      taille, taille
    }).then((user) => {
      saveUser(user)
      res.send({ message: "User register successfully", data: user });
    })
  })
 }catch (error){
  res.status(500).send({ error: error.message });
}

}

exports.loginUser = (req,res, next) => {
try{
  let {name, password} = req.body
  User.findOne({
    where : {
      name : name
    }
  }).then((user) => {
    if(!user){
      return res.status(400).send({ message: "User not found." })

    }

    var passwordIsValid = bcrypt.compareSync(password, user.password);

    if(!passwordIsValid){
      return res
      .status(401)
      .send({token: null, message: "Invalid Password"})
    }

    var token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 60000,
    });

    res.send({
      data : {
        id : user.id,
        name : user.name,
        password: user.password,
        age : user.age,
        taille : user.taille,
        token: token
      },
      status: 200,
    });


  });
}
catch (error){
  res.status(500).send({ error: error.message });
}
}

exports.profile = function (req, res, next) {
  res.send({
    status: 1,
    data: { userName: "Ça marcje", userWebsite: "https://abdallah.com" },
    message: "Successful",
  });
  next();
};
