// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// saving express to a variable
var app = express();
// creating port variable, 3000 for localhost and the procces.env to use whatever port heroku uses
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// requiring files for routing and passing the app variable into them for use by the files
require("./app/routing/apiroutes.js")(app);
require("./app/routing/htmlroutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});