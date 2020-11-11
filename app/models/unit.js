module.exports = (sequelize, DataTypes) => {
    //Creates a "Chirp" model that matches up with DB
const Unit = sequelize.define("unit", {
    unitID :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    bedrooms: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    floor: {
      type: DataTypes.INTEGER,
      allowNull : false
    },
    rent: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

 Unit.associate = (models) =>{(
     Unit.belongsTo(models.Tenant,{
         foreignKey:{
             allowNull:false
         }
     })

 }
  return Unit;

}



  
 