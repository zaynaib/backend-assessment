
var db = require("../models");
tRoutes = require("./tenant-routes");
uRoutes = require("./unit-routes");
rRoutes = require("./repair-routes")

module.exports = function(app){
    tRoutes(app);
    uRoutes(app);
    rRoutes(app);
}