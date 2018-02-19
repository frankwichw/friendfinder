// var express = require("express");
// var bodyParser = require("body-parser");
var path = require("path");

// var app = express();

module.exports = function(app){
    // routes for html pages
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};