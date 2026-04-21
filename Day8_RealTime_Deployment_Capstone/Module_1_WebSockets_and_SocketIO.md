# Module 1: WebSockets & Real-Time Apps ⚡

Up until now, our applications have been **Request-Response** based. The client asks, and the server answers. But what if the server wants to tell the client something *without* being asked? That's where **WebSockets** come in.

---

## 1. HTTP vs. WebSockets

- **HTTP (Stateless)**: Client -> Request -> Server -> Response. The connection closes instantly.
- **WebSockets (Stateful)**: Client <-> Permanent Connection <-> Server. Both can send data at any time.

**Use cases**: Chat apps, Live sports scores, Stock market tickers, Multiplayer games.

---

## 2. Introducing Socket.io

While WebSockets are a browser standard, the **Socket.io** library makes them much easier to use. It handles reconnections, fallback to polling, and rooms.

### 📦 Setup on Server
```bash
npm install socket.io
```

```javascript
const express = require('express');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Listen for a custom event
  socket.on('chat message', (msg) => {
    // Broadcast to EVERYONE
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(5000);
```

---

## 3. Connecting from React (Client)

### 📦 Setup on Client
```bash
npm install socket.io-client
```

```javascript
import { io } from "socket.io-client";
const socket = io("http://localhost:5000");

function ChatApp() {
  const sendMessage = () => {
    socket.emit('chat message', "Hello World!");
  };

  useEffect(() => {
    socket.on('chat message', (msg) => {
      console.log("New message:", msg);
    });
  }, []);
}
```

---

## 4. Rooms and Namespaces (Advanced)

Socket.io allows you to group users into **Rooms**. 
Example: Only users in the "Gaming" room receive gaming alerts.

```javascript
socket.join('room1');
io.to('room1').emit('exclusive event', 'For room 1 only!');
```

---

## 🎯 Task for Students
1. Use the [Chat Example](examples/socket_chat/) as a starter.
2. Implement a "Typing..." indicator. (Hint: Emit a `typing` event when the user hits a key).
3. Display a list of "Online Users" using an array on the backend.
