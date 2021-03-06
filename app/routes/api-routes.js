
var db = require("../models");

module.exports = function(app){
    
app.get('/', (req, res) => {
   res.render('index', { title: 'Hey', message: 'Hello there!' })

  })

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


      /* -------------------------------------------------------------------------- */
      /*                                Unit Routes                                 */
      /* -------------------------------------------------------------------------- */

      app.get("/api/units",function(req,res){
        db.unit.findAll({}).then( units=> {
        res.json(units);
        });
      });

      
  app.get("/api/units/:id",function(req,res){
    db.unit.findAll({
      where:{id:req.params.id}

    }).then(unit => {
     res.json(unit);
    });

    });


        //Create Route
      app.post('/api/units', (req,res) =>{
        db.unit.create(req.body).then(newUnit =>{res.json(newUnit)})
      });


       //Delete Route
  app.delete("/api/units/:id", (req, res)=> {
    db.unit.destroy({
      where: {
        id: req.params.id
      }
    }).then(deletedUnit =>{
      res.json(deletedUnit);
    });
  });

  //Update Route
    app.put("/api/units/:id", (req, res) =>{
      // Update takes in an object describing the properties we want to update, and
      // we use where to describe which objects we want to update
      db.unit.update({
        bedrooms: req.body.bedrooms,
        floor: req.body.floor,
        rent: req.body.rent,
        tenantId: req.body.tenantId
      }, {
        where: {
          id: req.params.id
        }
      }).then(updatedUnit =>{
        res.json(updatedUnit);
      });
    });

      /* -------------------------------------------------------------------------- */
      /*                                Repair Routes                                 */
      /* -------------------------------------------------------------------------- */

      app.get("/api/repairs",function(req,res){
        db.repair.findAll({}).then( repairs=> {
        res.json(repairs);
        });
      });

      
    app.get("/api/repairs/:id",function(req,res){
      db.repair.findAll({
        where:{id:req.params.id}

      }).then(repair => {
      res.json(repair);
      });

      });


        //Create Route
      app.post('/api/repairs', (req,res) =>{
        db.repair.create(req.body).then(newRepair =>{res.json(newRepair)})
      });


       //Delete Route
  app.delete("/api/repairs/:id", (req, res)=> {
    db.repair.destroy({
      where: {
        id: req.params.id
      }
    }).then(deletedRepair =>{
      res.json(deletedRepair);
    });
  });

  //Update Route
    app.put("/api/repairs/:id", (req, res) =>{
      // Update takes in an object describing the properties we want to update, and
      // we use where to describe which objects we want to update
      db.repair.update({
        tenantId: req.body.tenantId,
        note:req.body.note,
        type:req.body.type,
        complete:req.body.complete
      }, {
        where: {
          id: req.params.id
        }
      }).then(updatedRepair =>{
        res.json(updatedRepair);
      });
    });

      

}