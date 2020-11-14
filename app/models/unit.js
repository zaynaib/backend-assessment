'use strict'

module.exports =  (sequelize, DataTypes) => {

  const Unit = sequelize.define("unit",{ 

      unitID :{
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      
      bedrooms:{
          type: DataTypes.INTEGER,
          allowNull: false,
      },

    floor: {
      type: DataTypes.INTEGER,
      allowNull : false
    },
    rent: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
    
    }, {
    timestamps: false
});

    
//     Unit.associate = (models) =>{
//       Unit.belongsTo(models.Tenant,{
//    foreignKey:{
//              allowNull:false
//          } 
//               });
//     };

    // Syncs with DB
    Unit.sync();
    return Unit;

  };