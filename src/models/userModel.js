

module.exports = (
  sequelize, DataTypes
) => {
  return sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement : true
    },
    name : {
      type : DataTypes.STRING,
      allowNull : false,
    },
    password : {
      type : DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull : false
    },
    taille : {
      type : DataTypes.FLOAT,
      allowNull: false
    }
  });
};


