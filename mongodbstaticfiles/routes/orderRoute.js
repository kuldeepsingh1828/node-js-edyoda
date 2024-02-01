var express = require('express');
var router = express.Router();
var orderModel = require('../data/model/order');

//show all orders
router.get('/all', async function(req, res){
        const orders = await orderModel.find();
        res.render('orders',{orders});
});

//GET - show form to Add an order
router.get('/add', function(req, res){
    res.render('addOrder');
});

//add an order
router.post('/add', async function(req, res){
    const order = new orderModel(req.body);
    await order.save();
    res.redirect('/order/all');
});

//delete an order
router.get('/delete/:orderId', async function(req, res){
    const orderId = req.params.orderId;
    await orderModel.findByIdAndDelete(orderId);
    res.redirect('/order/all');
});

//Edit an order
router.get('/edit/:orderId', async function(req, res){
    const orderId = req.params.orderId;
    const order = await orderModel.findById(orderId);
    console.log(order);
   res.render('editOrder',{order});
});
//Edit an order
router.post('/edit/:orderId',  async function(req, res){
    const orderId = req.params.orderId;
    const order = await orderModel.findById(orderId);
    order.product = req.body.product;
    order.customerId = req.body.customerId;
    order.quantity = req.body.quantity;
    await order.save();
    res.redirect('/order/all');
});





module.exports= router;