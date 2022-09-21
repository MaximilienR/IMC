const { Weight } = require("../config/sequelize")
const { Op } = require("sequelize")

exports.createWeight = (req, res) => {
  Weight.create(req.body).then((weight)=>{
    const message = `Un nouveau poids a été ajouté pour ${req.body.owner}`
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


