// --- APP ENTRY POINT (Day 4: NodeJS & Express Basics) ---

// 1. Core Modules & Environment Setup (Day 4)
require('dotenv').config(); // Loads .env file (MONGO_URI, JWT_SECRET, etc.)
const express = require('express'); // Imports the Express framework
const mongoose = require('mongoose'); // Imports Mongoose for DB connection (Day 6)
const path = require('path'); // Core Node module for file paths
const fs = require('fs'); // Core Node module for File System operations (Day 5)
const http = require('http'); // Core Node module for HTTP server
const cors = require('cors'); // Middleware to allow React frontend connection (Day 7)
const { Server } = require('socket.io'); // Socket.io for Real-time features (Day 8)

// 2. Initializing the Express Application
const app = express();
// Creating an HTTP server that wraps our Express app (Required for Socket.io)
const server = http.createServer(app);
// Initializing Socket.io - allowing CORS from our frontend port
const io = new Server(server, {
  cors: { origin: "*" } // For development, we allow all origins
});

// 3. Port Configuration (Day 4: .env Basics)
const PORT = process.env.PORT || 5000;

// 4. FS Module Integration: Server Logging (Day 5: File System)
// This middleware runs for every request and logs it to a local file
app.use((req, res, next) => {
  const logMessage = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`;
  // Using fs.appendFile (Async - Day 5) to document server traffic
  fs.appendFile(path.join(__dirname, 'server.log'), logMessage, (err) => {
    if (err) console.error("FS Log failed!");
  });
  next(); // Move to the next middleware
});

// 5. Global Middleware (Day 5-7)
app.use(cors()); // Solving the CORS issue for the full stack bridge (Day 7)
app.use(express.json()); // Parses incoming JSON data (Day 4)
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data from forms (Day 5)

// 6. View Engine Setup: EJS (Day 5: Templates)
app.set('view engine', 'ejs'); // Telling Express to use EJS
app.set('views', path.join(__dirname, 'views')); // Defining the views folder

// 7. Serving Static Files (Day 5: Static Content)
app.use(express.static(path.join(__dirname, 'public')));

// 8. DB Connection (Day 6: Database Integration)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected! (Day 6 Mastery)'))
  .catch(err => console.error('❌ DB Connection Error:', err));

// 9. WebSockets Logic (Day 8: Real-time Communication)
io.on('connection', (socket) => {
  console.log('⚡ User connected to WebSocket:', socket.id);

  // Listen for real-time posts and broadcast to all users
  socket.on('new_post', (data) => {
    io.emit('broadcast_post', data); // Push data to all connected clients
  });

  socket.on('disconnect', () => console.log('👤 User disconnected'));
});

// 10. API Routes (Day 4 & 7)
const authRoutes = require('./src/routes/authRoutes');
const postRoutes = require('./src/routes/postRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

// 11. Legacy Admin Route (Day 5: MVC & Templates)
app.get('/admin', (req, res) => {
  // Rendering an EJS template and passing dynamic data (Day 5)
  res.render('admin', { title: "Admin Portal", status: "Server Online" });
});

// 12. Global Error Handler (Day 7: Error handling)
const { errorHandler } = require('./src/middleware/errorMiddleware');
app.use(errorHandler);

// 13. Starting the Server
server.listen(PORT, () => {
  console.log(`🚀 VibeStack Server running on http://localhost:${PORT}`);
});
