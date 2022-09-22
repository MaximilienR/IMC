const express = require('express')
const app = express()
const port = 3000
const bodyparser = require("body-parser")
const Routes = require("./routes")
const cors = require("cors")
const sequelize = require("./src/config/sequelize")


sequelize.initOb();
app.use(cors());
app.use(bodyparser.json())
app.use("/user", Routes)

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, Content-Type, Accept"
  );
  next();
});


app.listen(port, console.log("Serveur connecté"))
