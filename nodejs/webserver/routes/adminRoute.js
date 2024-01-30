var express = require('express');
//make a route for the user
var route = express.Router();

//make a route for the user
route.get('/', function (req, res) {
    res.send('Welcome to express server -- ADMIN');
});

//localhost:3000/admin/delete/1 --- delete ADMIN 1 data
route.get('/delete/:id', function (req, res) {
    //print the id
    res.send('Welcome to express server -- ADMIN/delete/' + req.params.id);
});


//localhost:3000/admin/1 --- READ ADMIN 1 data
//localhost:3000/admin/add --- add ADMIN data (POST)


//THINK ABOUT THE METHOD AND ROUTE YOURSELF



module.exports = route;