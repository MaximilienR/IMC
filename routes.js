const express = require("express")
const { createUser } = require("./src/controllers/controllersUser")
const { createWeight, findAllWeightbyName } = require("./src/controllers/controllersWeight")
const  router = express.Router()

router.post("/", createUser)
router.post("/weight", createWeight)
router.get("/weight/:owner", findAllWeightbyName)

module
.exports = router
