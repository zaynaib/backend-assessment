
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


}


