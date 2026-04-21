# 04: WebSockets for Beginners 🌐

Ordinary web requests are like **sending a letter**: you send a request, and wait for a response. WebSockets are like a **phone call**: once connected, both sides can talk whenever they want.

---

## 1. Why use WebSockets?
- **Real-Time**: Messages appear instantly (like WhatsApp or Discord).
- **Two-Way**: The server can talk to the client without the client asking first.
- **Efficient**: No need to refresh the page or "poll" the server every second.

---

## 2. How to use it (Socket.io)

### **Step A: Server Setup (Node.js)**
```javascript
const { Server } = require("socket.io");
const io = new Server(server); // 'server' is your Express server

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Listen for a message from the client
  socket.on("chat-message", (msg) => {
    // Send it to EVERYONE connected
    io.emit("chat-message", msg);
  });
});
```

### **Step B: Client Setup (React)**
```javascript
import { io } from "socket.io-client";
const socket = io("http://localhost:5000");

function Chat() {
  const sendMessage = () => {
    socket.emit("chat-message", "Hello everyone!");
  };

  socket.on("chat-message", (msg) => {
    console.log("New message:", msg);
  });

  return <button onClick={sendMessage}>Send</button>;
}
```

---

## 3. When to use WebSockets?
- **YES**: Chat apps, live stock prices, multiplayer games, real-time notifications.
- **NO**: Standard blogs, static websites, contact forms.

---

## 💡 Quick Vocabulary:
- **`emit`**: Sending a message.
- **`on`**: Listening for a message.
- **`connection`**: The moment a user logs into the socket.
- **`broadcast`**: Sending a message to everyone *except* the sender.
