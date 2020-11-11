
// module.exports = function(app){
    
// app.get('/', (req, res) => {
//     //res.send('Hello World!')
//    res.render('index', { title: 'Hey', message: 'Hello there!' })

//   })

// }

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;



const Tenant = require("../models/tenant")(sequelize,Sequelize);


module.exports = function(app){
    
app.get('/', (req, res) => {
   res.render('index', { title: 'Hey', message: 'Hello there!' })

  })

  app.get("/api/all",function(req,res){
        Tenant.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  })

}


// // Routes
// // =============================================================
// module.exports = function(app) {

//     app.get('/', (req, res) => {
//    res.render('index', { title: 'Hey', message: 'Hello there!' })

//   });

//   // Get all chirps
//   app.get("/api/all", function(req, res) {

//     // Finding all Chirps, and then returning them to the user as JSON.
//     // Sequelize queries are aynchronous, which helps with percieved speed.
//     // If we want something to be guaranteed to happen after the query, we'll use
//     // the .then function
//     Chirp.findAll({}).then(function(results) {
//       // results are available to us inside the .then
//       res.json(results);
//     });

//   });

//   // Add a chirp
//   app.post("/api/new", function(req, res) {

//     console.log("Chirp Data:");
//     console.log(req.body);

//     Chirp.create({
//       author: req.body.author,
//       body: req.body.body,
//       created_at: req.body.created_at
//     }).then(function(results) {
//       // `results` here would be the newly created chirp
//       res.end();
//     });

//   });

// };