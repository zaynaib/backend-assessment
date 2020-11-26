var db = require("../models");

module.exports = function(app){

     /* -------------------------------------------------------------------------- */
  /*                                Tenant Routes                               */
  /* -------------------------------------------------------------------------- */

  //Read Route
  app.get("/api/tenants",function(req,res){
    db.tenant.findAll({}).then(tenants => {
  res.json(tenants);
});

});

app.get("/api/tenants/:id",function(req,res){
db.tenant.findAll({
  where:{id:req.params.id}

}).then(tenant => {
 res.json(tenant);
});

});

//Create Route
app.post('/api/tenants', (req,res) =>{
db.tenant.create(req.body).then(newTenant =>{res.json(newTenant)})
})

//Delete Route
app.delete("/api/tenants/:id", (req, res)=> {
db.tenant.destroy({
  where: {
    id: req.params.id
  }
}).then(deletedTenant =>{
  res.json(deletedTenant);
});
});

//Update Route
app.put("/api/tenants/:id", (req, res) =>{
  // Update takes in an object describing the properties we want to update, and
  // we use where to describe which objects we want to update
  db.tenant.update({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  }, {
    where: {
      id: req.params.id
    }
  }).then(dbTenant =>{
    res.json(dbTenant);
  });
});



};