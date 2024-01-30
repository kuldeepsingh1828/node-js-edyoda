var express = require('express');
//make a route for the user
var route = express.Router();

//make a route for the user
route.get('/', function (req, res) {
    res.send('Welcome to express server -- MAINTAINER');
});



module.exports = route;