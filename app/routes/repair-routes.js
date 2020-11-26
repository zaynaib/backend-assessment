var db = require("../models");

module.exports = function(app){

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