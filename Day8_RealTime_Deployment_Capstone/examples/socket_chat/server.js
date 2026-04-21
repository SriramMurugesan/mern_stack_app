const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('chat message', (msg) => {
    // Send to everyone
    io.emit('chat message', {
        id: socket.id,
        text: msg,
        time: new Date().toLocaleTimeString()
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Socket Chat running on http://localhost:${PORT}`);
});
