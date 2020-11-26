var db = require("../models");

module.exports = function(app){

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
}