// Import the required modules
const WebSocket = require('ws');
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' },
];
const wss = new WebSocket.Server({ port: 8081 });

wss.on('connection', function connection(ws) {

    ws.on('message', function incoming(message) {
        const { type } = JSON.parse(message);
        switch (type) {
            case 'getUsers':
                getUsers(message);
                break;
            case 'createUser':
                createUser(message);
                break;
            case 'deleteUser':
                deleteUser(message);
                break;
            case 'updateUser':
                updateUser(message);
                break;
        }
    });

    // Define the event handler for when a client disconnects
    ws.on('close', function close() {
        console.log('A client disconnected');
    });

    function getUsers(message) {
        ws.send(JSON.stringify({ type: 'users', data: users }));
    }

    function createUser(message) {
        const user = JSON.parse(message).data;
        users.push({ id: users.length + 1, ...user });
        ws.send(JSON.stringify({ type: 'users', data: users }));
    }

    function updateUser(message) {
        const userid = JSON.parse(message).data.id;
        const userIndex = users.findIndex(user => user.id === userid);
        users[userIndex].name = users[userIndex].name.toUpperCase();
        ws.send(JSON.stringify({ type: 'users', data: users }));
    }
    
    function deleteUser(message) {
        const { id } = JSON.parse(message).data;
        const index = users.findIndex(user => user.id === id);
        users.splice(index, 1);
        ws.send(JSON.stringify({ type: 'users', data: users }));
    }
});
