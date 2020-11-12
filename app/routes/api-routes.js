
// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;



const Tenant = require("../models/tenant")(sequelize,Sequelize);
const Unit = require("../models/unit")(sequelize,Sequelize);


module.exports = function(app){
    
app.get('/', (req, res) => {
   res.render('index', { title: 'Hey', message: 'Hello there!' })

  })


  app.get("/api/tenants",function(req,res){
        Tenant.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  })

   app.post("/api/tenants", function(req, res) {
    Tenant.create(req.body).then(function(Tenant) {
      res.json(Tenant);
    });
  });

  
  app.delete("/api/tenants/:id", function(req, res) {
    Tenant.destroy({
      where: {
        tenantID: req.params.id
      }
    }).then(function(dbTenant) {
      res.json(dbTenant);
    });
  });

    app.get("/api/units",function(req,res){
        Unit.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  })

   app.post("/api/units", function(req, res) {
    Tenant.create(req.body).then(function(Tenant) {
      res.json(Tenant);
    });
  });

    app.get("/api/units",function(req,res){
        Unit.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  
  app.delete("/api/units/:id", function(req, res) {
    Tenant.destroy({
      where: {
        UnitID: req.params.id
      }
    }).then(function(dbUnit) {
      res.json(dbUnit);
    });
  });


}


