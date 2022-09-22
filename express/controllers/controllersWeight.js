const { Weight } = require("../config/sequelize")
const { Op } = require("sequelize")

const saveWeight = (data) => {
  fs.writeFileSync("/data/weight.json", JSON.stringify(data), "utf-8")
}


exports.createWeight = (req, res) => {
  Weight.create(req.body).then((weight)=>{
    const message = `Un nouveau poids a été ajouté pour ${req.body.owner}`
    saveWeight(weight)
    res.json({message, data: weight})
  })
}

exports.findAllWeightbyName = (req, res) => {
  Weight.findAll({
    where :  {
      owner : {
        [Op.eq]: req.params.owner
      }
    }
  }).then((weight)=>{
    const message ="Un ou plusieurs poids a ont été  trouvé(s)"
    res.json({message, data : weight})
  })
}


