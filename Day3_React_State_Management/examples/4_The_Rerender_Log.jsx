/* 
  EXAMPLE 4: The Re-render Cycle
  ------------------------------
  How to run: Copy this code and paste it into 'src/App.jsx' of your lab project.
*/

import React, { useState } from 'react';

function App() {
  const [text, setText] = useState("");
  const [showLog, setShowLog] = useState(false);

  // This log runs EVERY time the component re-renders
  console.log("RE-RENDER: App component just refreshed!");

  return (
    <div style={{ padding: '40px', backgroundColor: '#18181b', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <h1>The Re-render Cycle 🔄</h1>
      <p>Every time you type a letter, React re-executes this entire function.</p>
      
      <div style={{ margin: '30px 0', padding: '20px', border: '1px solid #3f3f46', borderRadius: '12px' }}>
        <input 
          type="text" 
          placeholder="Type something..." 
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ padding: '10px', width: '300px', borderRadius: '6px', border: 'none' }}
        />
        <h2 style={{ color: '#a1a1aa' }}>Live Feedback: <span style={{ color: '#818cf8' }}>{text}</span></h2>
      </div>

      <div style={{ backgroundColor: '#27272a', padding: '20px', borderRadius: '12px' }}>
        <button onClick={() => setShowLog(!showLog)} style={btnStyle}>
          {showLog ? "Hide Logic Explanation" : "Show Logic Explanation"}
        </button>

        {showLog && (
          <div style={{ marginTop: '20px', textAlign: 'left', lineHeight: '1.8' }}>
            <p><strong>What just happened?</strong></p>
            <ol>
              <li>You typed a key.</li>
              <li><code>setText</code> was called.</li>
              <li>React says: "Hey, the state changed!"</li>
              <li>React <strong>Re-renders</strong> (it runs this <code>App()</code> function again).</li>
              <li>The <code>console.log</code> at the top of the file runs again.</li>
              <li>React updates the text on screen.</li>
            </ol>
          </div>
        )}
      </div>

      <p style={{ marginTop: '40px', color: '#facc15' }}>⚠️ Look at your browser console (F12) to see local "RE-RENDER" messages!</p>
    </div>
  );
}

const btnStyle = {
  padding: '10px 20px',
  cursor: 'pointer',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#6366f1',
  color: 'white'
};

export default App;
