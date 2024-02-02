var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

//route to login
router.get('/login', function(req, res){
    res.render('login');
});

//generate json token
router.post('/login', function(req, res){
    const token = jwt.sign(req.body, 'secret',{expiresIn: 60});
    res.json({token});
});

router.get('/verify', function(req, res){
    const token = req.query.token;
    jwt.verify(token, 'secret', function(err, decoded){
        if(err){
            res.json({message: 'Invalid token'});
        }else{
            res.json(decoded);
        }
    });
});
module.exports= router;