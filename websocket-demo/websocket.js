// Import the required modules
const WebSocket = require('ws');

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// Define the event handler for when a client connects
wss.on('connection', function connection(ws) {
  console.log('A client connected');

  // Define the event handler for when a message is received from a client
  ws.on('message', function incoming(message) {
    console.log('Received: %s', message);

    // Echo the received message back to the client
    ws.send(`${message.toString().toUpperCase()}`);
  });

  // Define the event handler for when a client disconnects
  ws.on('close', function close() {
    console.log('A client disconnected');
  });
});
