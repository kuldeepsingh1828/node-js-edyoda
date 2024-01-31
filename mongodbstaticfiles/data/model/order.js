var mongoose = require('mongoose');
var orderSchema = new mongoose.Schema({
    customerId: {
        type: String,
        required: true
    },
    product:{   
        type: String,
        required: true
    },
    quantity: { 
        type: Number,
        required: true
        }
});

//orders is the name of the collection
var orderModel = mongoose.model('order', orderSchema);

module.exports = orderModel;