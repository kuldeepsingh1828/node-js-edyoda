var express = require('express');
var http = require('http');
var app = express();
var userRoute = require('./routes/userRoute');
var connection = require('./data/connection'); 

app.use('/user',userRoute);


const server =http.createServer(app);
server.listen(3000,()=>{
    console.log('server is running on port 3000');
});