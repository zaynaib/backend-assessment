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
    tenantId:{
        type: DataTypes.UUID,
        allowNull: true
    }
    
    }, {
    timestamps: false
});

    // Syncs with DB
    Unit.sync();
    return Unit;

  };