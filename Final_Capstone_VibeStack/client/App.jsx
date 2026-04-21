// --- REACT FRONTEND (Day 3: Foundations & Day 7-8 Integration) ---
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

// 1. WebSocket Initialization (Day 8: Real-time Apps)
// Connecting to our backend port
const socket = io('http://localhost:5000');

function App() {
  // 2. React Hooks: State Management (Day 3: useState)
  const [posts, setPosts] = useState([]); // List of blog posts
  const [user, setUser] = useState(null); // Logged in user info
  const [username, setUsername] = useState(''); // Form state: username
  const [password, setPassword] = useState(''); // Form state: password
  const [activeTab, setActiveTab] = useState('home'); // Logic for tabs

  // 3. React Hooks: Lifecycle (Day 3: useEffect)
  useEffect(() => {
    // 4. Fetch API Integration (Day 2: Async Mastery & Day 7: Bridge)
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/posts');
        setPosts(data.data);
      } catch (err) {
        console.error("Fetch failed! (Day 7 CORS or Server Error)");
      }
    };
    fetchPosts();

    // 5. WebSocket Listening (Day 8)
    // When the server sends a 'broadcast_post' event, update the UI instantly
    socket.on('broadcast_post', (newPost) => {
      setPosts((prev) => [newPost, ...prev]);
    });

    // Cleanup: Disconnect socket when component unmounts
    return () => socket.off('broadcast_post');
  }, []);

  // 6. Handle Login (Day 7: Auth & Fetch)
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      // Saving token to memory (Professional apps use localStorage)
      setUser(data.user);
      localStorage.setItem('token', data.token);
      alert('Login Successful! (Day 7 JWT)');
    } catch (err) {
      alert('Login Failed! (Check Error Middleware - Day 7)');
    }
  };

  // 7. Render Logic: Components & Structure (Day 1: HTML5 & Day 3: Components)
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Navbar: Tailwind Utility Classes (Day 1: Responsive Design) */}
      <nav className="bg-indigo-600 p-4 text-white flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          VibeStack Portal <span className="text-xs bg-indigo-400 px-2 py-1 rounded">MERN</span>
        </h1>
        <div>
          {user ? `Hello, ${user.username}` : 'Not Logged In'}
        </div>
      </nav>

      {/* Main Container (Day 1: Box Model & Grid) */}
      <main className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column: Login Section (Day 3: Interaction) */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Account Portal</h2>
          {!user ? (
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <input 
                className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500" 
                placeholder="Username" 
                onChange={(e) => setUsername(e.target.value)} 
              />
              <input 
                type="password" 
                className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500" 
                placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)} 
              />
              <button className="bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition">
                Sign In (Day 7)
              </button>
            </form>
          ) : (
            <div className="text-green-600 font-bold">✓ Logged In Successfully</div>
          )}
        </section>

        {/* Center/Right Column: Posts (Day 3: State mapping) */}
        <section className="md:col-span-2 space-y-6">
          <h2 className="text-xl font-semibold flex justify-between">
            Community Feed 📡
            <span className="text-sm font-normal text-gray-500">Real-time (Day 8)</span>
          </h2>
          
          {posts.map((post) => (
            <article key={post._id} className="bg-white p-6 rounded-xl shadow-md hover:scale-[1.01] transition-transform">
              <h3 className="text-lg font-bold text-indigo-700">{post.title}</h3>
              <p className="text-gray-600 mt-2">{post.content}</p>
              {post.imageUrl && (
                <img src={post.imageUrl} alt="Post" className="mt-4 rounded-lg w-full max-h-64 object-cover" />
              )}
              <div className="mt-4 text-xs text-gray-400 flex justify-between">
                <span>By: {post.author.username}</span>
                <span>{new Date(post.createdAt).toLocaleString()}</span>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* Footer (Day 1) */}
      <footer className="text-center p-8 text-gray-400 text-sm">
        Built with Antigravity IDE (Day 1) & The Vibe Stack
      </footer>
    </div>
  );
}

export default App;
