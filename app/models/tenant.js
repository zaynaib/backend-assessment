<<<<<<< HEAD
  'use strict'
  // Makes the Chirp Model available for other files (will also create a table)
module.exports =  (sequelize, DataTypes) => {
      //Creates a "Chirp" model that matches up with DB
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




  
||||||| 014514e
=======
  // Makes the Chirp Model available for other files (will also create a table)
module.exports =  (sequelize, DataTypes) => {
      //Creates a "Chirp" model that matches up with DB
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
    });

    
    Tenant.associate = (models) =>{
      Tenant.hasOne(models.Unit,{
        onDelete: "cascade"
      });
    };


    return Tenant;

  };




  
>>>>>>> 4b3eeba93a90bfb89b88c2856b0aa34f94263179
