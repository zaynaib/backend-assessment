//dependencies

const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const path = require ('path');


const PORT = process.env.PORT || 3000;

//server static files
// Static directory to be served


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(`${__dirname}/app/public`));



//templating
app.set('view engine', 'pug');
app.set('views', `${__dirname}/app/views`);


// Routes
// =============================================================
//require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})