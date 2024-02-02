var express = require('express');
var http = require('http');
var app = express();
var jwt = require('jsonwebtoken');
app.set('view engine','ejs');
var adminRoute = require('./routes/adminRoute');

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/admin',adminRoute);
const authenicateJWT = (req,res,next)=>{
    if(req.query.token){
        //verify token
        jwt.verify(req.query.token,'secret',(err,decode)=>{
            if(err){
                res.json({message:'Invalid token'});
            }else{
               next();
            }
        });
    }else{
        res.json({error:'Where is token?'});
    }
};

app.get('/',authenicateJWT,(req,res,next)=>{
    res.send('Hello World 2');
});



const server =http.createServer(app);
server.listen(3000,()=>{
    console.log('server is running on port 3000');
});