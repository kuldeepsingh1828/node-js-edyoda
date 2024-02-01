var express = require('express');
var http = require('http');
var app = express();
var userRoute = require('./routes/userRoute');
var orderRoute = require('./routes/orderRoute');
var connection = require('./data/connection'); 

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));

app.use('/user',userRoute);
app.use('/order',orderRoute);


const server =http.createServer(app);
server.listen(3000,()=>{
    console.log('server is running on port 3000');
});