  //https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
  'use strict'
  // Makes the Tenant Model available for other files (will also create a table)
module.exports =  (sequelize, DataTypes) => {
      //Creates a "Tenant" model 
  const Tenant = sequelize.define("tenant",{ 

      tenantID :{
          type: DataTypes.UUID,
          primaryKey: true,
          unique:true,
          defaultValue:DataTypes.UUIDV4
      
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull : false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
    timestamps: false
    });

    
    // Tenant.associate = (models) =>{
    //   Tenant.hasOne(models.Unit,{
    //   });
    // };

    // Syncs with DB
    Tenant.sync();
    return Tenant;

  };



