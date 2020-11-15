'use strict'
// Makes the Tenant Model available for other files (will also create a table)
module.exports =  (sequelize, DataTypes) => {
    //Creates a "Tenant" model 
const Repair = sequelize.define("repair",{ 

     id:{
        type: DataTypes.UUID,
        primaryKey: true,
        unique:true,
        defaultValue:DataTypes.UUIDV4
    
    },
    tenantId: {
        type: DataTypes.UUID,
        allowNull: true
    },
    note: {
      type: DataTypes.STRING,
      allowNull : false
    },
    type: {
      type: DataTypes.ENUM,
      values: ['conditioning', 'flooring', 'plumbing','']
    },
    complete: {
        type:DataTypes.BOOLEAN
    }
  }, {
  timestamps: false
  });

  // Syncs with DB
  Repair.sync();
  return Repair;

};