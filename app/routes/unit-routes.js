const db = require("../models/unit")

module.exports = function(app) {
  app.get("/api/units", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Unit.findAll({}).then(function(results) {
      res.json(results);
    });
  });



};