//https://stackoverflow.com/questions/13151693/passing-arguments-to-require-when-loading-module

//dependencies

const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const path = require ('path');


const PORT = process.env.PORT || 3000;

//server static files
// Static directory to be served

app.use(express.static(`${__dirname}/app/public`));

//middleware
app.use(bodyParser.json());

//templating
app.set('view engine', 'pug');
app.set('views', `${__dirname}/app/views`);


// Routes
// =============================================================
require("./app/routes/api-routes.js")(app);

// Here we introduce HTML routing to serve different HTML files
//require("./app/routes/html-routes.js")(app);



app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})