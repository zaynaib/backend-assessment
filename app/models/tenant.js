  //https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
  'use strict'
module.exports =  (sequelize, DataTypes) => {
  const Tenant = sequelize.define("tenant",{ 

      tenantID :{
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
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

    
    Tenant.associate = (models) =>{
      Tenant.hasOne(models.Unit,{
        onDelete: "cascade"
      });
    };

    // Syncs with DB
    Tenant.sync();
    return Tenant;

  };



