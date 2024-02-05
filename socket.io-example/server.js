const express = require('express');
const http = require('http');
const app = express();
const socket = require('socket.io');
const server = http.createServer(app);
const io = socket(server);

io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('message',(msg)=>{
        console.log(msg);
        io.emit('client message',msg+' from server');
    })
});

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/index.html');
});

server.listen(3000, () => {
    console.log("server is running on port 3000")
});