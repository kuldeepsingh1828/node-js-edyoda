const express = require('express');
const app = express();
const http = require('http');

const server = http.createServer(app);
const port = 3000;

app.get('/user', (req, res) => {
    res.send('Hello World!');
    }
);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = server; // Export the server for testing