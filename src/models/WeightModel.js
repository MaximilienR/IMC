module.exports = (
  sequelize, DataTypes
) =>  {
  return sequelize.define("weight", {
    id : {
      type: DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true
    },
    weight : {
        type : DataTypes.INTEGER ,
        allowNull : false

    },

      owner : {
        type : DataTypes.STRING,
        allowNull : false
      },
      date : {
        type :  DataTypes.DATEONLY,
        allowNull: false
      }

  }
  )
}

