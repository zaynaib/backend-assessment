var Sequelize = require("sequelize");
var sequelize = require("./app/config/connection.js");

const Tenant = require("./app/models/tenant")(sequelize, Sequelize);
const Unit = require("./app/models/unit")(sequelize, Sequelize);
const Repair = require("./app/models/repair")(sequelize, Sequelize);

//Relations
Tenant.hasOne(Unit,{
    onDelete: 'SET NULL',
  });
  Tenant.hasMany(Repair);
  
  Unit.belongsTo(Tenant);
  Repair.belongsTo(Tenant);
  

var tenants = [
  {
    "id": 1,
    "firstName": "meta",
    "lastName": "worldpeace",
    "email": "metaworldpeace@gmail.com"
  },
  {
    "id": 2,
    "firstName": "Jimmy",
    "lastName": "butler",
    "email": "jimmybutler@gmail.com"
  },
  {
    "id": 3,
    "firstName": "Nneka",
    "lastName": "Ogwumike",
    "email": "nneka@gmail.com"
  }
]
var units =[
    {
        "id": 1,
        "bedrooms": 2,
        "floor":1,
        "rent": 300,
        "tenantId": 1
    },
    {
        "id": 2,
        "bedrooms": 3,
        "floor":2,
        "rent": 600,
        "tenantId": 2
    }
];

var repairs =[{
    "id":1,
    "tenantId":1,
    "note": "toliet wont flush",
    "type":"plumbing",
    "complete":false

}];

tenants.forEach(function(tenant){
  Tenant.create(tenant);
});


units.forEach(function(unit){
    Unit.create(unit);
  });

  
repairs.forEach(function(repair){
    Repair.create(repair);
  });