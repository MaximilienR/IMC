const express = require("express")
const { createUser, loginUser, profile } = require("./controllers/controllersUser")
const { createWeight, findAllWeightbyName } = require("./controllers/controllersWeight")
const checkUpUsername =  require("./middleware/VerifyPseudo")
const verifyTokens = require("./middleware/authjwt")
const  router = express.Router()

router.post("/",   createUser)
router.post("/login", loginUser)
router.get("/profile", verifyTokens, profile)
router.post("/weight", createWeight)
router.get("/weight/:owner", findAllWeightbyName)

module
.exports = router
