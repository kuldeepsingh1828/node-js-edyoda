var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:12345@lmscluster.tmbao5e.mongodb.net/edyodadb?retryWrites=true&w=majority');


mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ');
});



mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

//export the connection
module.exports = mongoose.Connection;