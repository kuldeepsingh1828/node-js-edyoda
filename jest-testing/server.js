const express = require('express');
const app = express();
app.use(express.json());
const http = require('http');
const users = [
    {   id: 1,
        name: 'John Doe'},
    {    id: 2,
        name: 'Jane Doe'}
    ]

const server = http.createServer(app);
const port = 3000;

//GET USERS
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

//POST USERS
app.post('/users/create', (req, res) => {
    //append new user to the users array
    users.push({ id: users.length + 1, name: req.body.name });
    res.status(201).json(users);
});

//PUT USER BY ID
app.put('/users/:id', (req, res) => {
    //update user by id
    const id = req.params.id;
    //find user by id
    const name = req.body.name;
    const userIndex = users.findIndex(user => user.id === parseInt(id));
    if(userIndex !== -1) {
    users[userIndex].name = name;
    res.status(200).json(users);
    }else{
    res.status(404).json({ message: 'User not found' });
    }
});

//DELETE USER BY ID
app.delete('/users/:id', (req, res) => {
    //delete user by id
    const id = req.params.id;
    const userIndex = users.findIndex(user => user.id === parseInt(id));
    if(userIndex !== -1) {
    users.splice(userIndex, 1);
    res.status(200).json(users);
    }else{
    res.status(404).json({ message: 'User not found' });
    }
});


server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = server; // Export the server for testing