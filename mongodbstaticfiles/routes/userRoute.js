var express = require('express');
var router = express.Router();
var users = require('../data/users');
var path = require('path');
var orderModel = require('../data/model/order');

let viewsPath = path.join(__dirname,'../views');

router.get('/real-json',(req,res)=>{
    //render all users
   orderModel.find({}).then((orders)=>{
         res.json({orders});
    }).catch((err)=>{
        res.json({err});
    });
});

router.get('/fake',(req,res)=>{
    //render all users
    // res.json({users:users});
    res.render('users.ejs',{users});
});

router.get('/real-html',(req,res)=>{
        //render all users
       orderModel.find({}).then((orders)=>{
           res.render('orders.ejs',{orders});
            //  res.json({orders});
        }).catch((err)=>{
            res.json({err});
        });
});



router.get('/json',(req,res)=>{
    //render all users
    res.json({users:users});
    // res.render('users.ejs',{users});
});

module.exports = router;