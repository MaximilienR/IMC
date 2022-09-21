const express = require("express")
const { createUser, loginUser, profile } = require("./src/controllers/controllersUser")
const { createWeight, findAllWeightbyName } = require("./src/controllers/controllersWeight")
const checkUpUsername =  require("../IMC/src/middleware/VerifyPseudo")
const verifyTokens = require("../IMC/src/middleware/authjwt")
const  router = express.Router()

router.post("/",   createUser)
router.post("/login", loginUser)
router.get("/profile", verifyTokens, profile)
router.post("/weight", createWeight)
router.get("/weight/:owner", findAllWeightbyName)

module
.exports = router
