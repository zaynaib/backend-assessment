'use strict'

module.exports =  (sequelize, DataTypes) => {

  const Unit = sequelize.define("unit",{ 

      id :{
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4

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
    },
    
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