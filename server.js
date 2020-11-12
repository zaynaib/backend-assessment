//https://stackoverflow.com/questions/13151693/passing-arguments-to-require-when-loading-module
//https://levelup.gitconnected.com/table-relationships-in-sequelize-2e2533580c2a
//https://stackoverflow.com/questions/14169655/sequelize-js-foreign-key
//https://stackoverflow.com/questions/10216395/error-failed-to-lookup-view-in-express/12167582#12167582
//http://zetcode.com/javascript/dotenv/
//https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
//https://stackoverflow.com/questions/21066755/how-does-sequelize-sync-work-specifically-the-force-option
//https://www.youtube.com/watch?v=3Nvx0mNXPc4
//https://stackoverflow.com/questions/20386402/sequelize-unknown-column-createdat-in-field-list
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
require("./app/routes/api-routes.js")(app);

// Here we introduce HTML routing to serve different HTML files
//require("./app/routes/html-routes.js")(app);



app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})