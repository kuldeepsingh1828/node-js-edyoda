var express = require('express');
var http = require('http');
var fs = require('fs');
var app = express();
var path = require('path');
var userRoute = require('./routes/userRoute');
var adminRoute = require('./routes/adminRoute');
var maintainerRoute = require('./routes/maintainerRoute');

app.use('/user', userRoute);
app.use('/admin', adminRoute);
app.use('/maintainer', maintainerRoute);






// //http://localhost:3000/
// app.get('/', function (req, res) {
//     var fileLocation = path.join(__dirname, 'views/index.html');
//     //show the login page html
//     fs.readFile(fileLocation, function (err, data) {
//             res.send(data.toString());
//     });
// });


// //http://localhost:3000/login
// app.get('/login', function (req, res) {
//     res.send('Welcome to login page');
// });

// app.post('/login', function (req, res) {
//     res.send('Welcome to login post page');
// });

var server = http.createServer(app);
server.listen(3000);
