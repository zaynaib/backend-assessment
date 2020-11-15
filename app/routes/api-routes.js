
// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;



const Tenant = require("../models/tenant")(sequelize,Sequelize);
const Unit = require("../models/unit")(sequelize,Sequelize);

//Relations
//Unit.belongsTo(Tenant,{});
//Tenant.hasOne(Unit);


module.exports = function(app){
    
app.get('/', (req, res) => {
   res.render('index', { title: 'Hey', message: 'Hello there!' })

  })

  /* -------------------------------------------------------------------------- */
  /*                                Tenant Routes                               */
  /* -------------------------------------------------------------------------- */

  //Read Route
  app.get("/api/tenants",function(req,res){
        Tenant.findAll({}).then(tenants => {
      res.json(tenants);
    });

  });

  app.get("/api/tenants/:id",function(req,res){
    Tenant.findAll({
      where:{tenantID:req.params.id}

    }).then(tenant => {
  res.json(tenant);
});

});
  
  //Create Route
  app.post('/api/tenants', (req,res) =>{
    Tenant.create(req.body).then(newTenant =>{res.json(newTenant)})
  })

  //Delete Route
  app.delete("/api/tenants/:id", (req, res)=> {
    Tenant.destroy({
      where: {
        tenantID: req.params.id
      }
    }).then(deletedTenant =>{
      res.json(deletedTenant);
    });
  });

  //Update Route
    app.put("/api/tenants/:id", (req, res) =>{
      // Update takes in an object describing the properties we want to update, and
      // we use where to describe which objects we want to update
      Tenant.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
      }, {
        where: {
          tenantID: req.params.id
        }
      }).then(dbTenant =>{
        res.json(dbTenant);
      });
    });


      /* -------------------------------------------------------------------------- */
      /*                                Unit Routes                                 */
      /* -------------------------------------------------------------------------- */

      app.get("/api/units",function(req,res){
        Unit.findAll({}).then( units=> {
        res.json(units);
        });
      });


        //Create Route
      app.post('/api/units', (req,res) =>{
        Unit.create(req.body).then(newUnit =>{res.json(newUnit)})
      });


       //Delete Route
  app.delete("/api/units/:id", (req, res)=> {
    Unit.destroy({
      where: {
        unitID: req.params.id
      }
    }).then(deletedUnit =>{
      res.json(deletedUnit);
    });
  });

  //Update Route
    app.put("/api/units/:id", (req, res) =>{
      // Update takes in an object describing the properties we want to update, and
      // we use where to describe which objects we want to update
      Unit.update({
        bedrooms: req.body.bedrooms,
        floor: req.body.floor,
        rent: req.body.rent
      }, {
        where: {
          unitID: req.params.id
        }
      }).then(updatedUnit =>{
        res.json(updatedUnit);
      });
    });


}


