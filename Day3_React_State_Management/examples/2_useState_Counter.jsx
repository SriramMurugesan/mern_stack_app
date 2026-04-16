/* 
  EXAMPLE 2: useState (The Digital Memory)
  ----------------------------------------
  How to run: Copy this code and paste it into 'src/App.jsx' of your lab project.
*/

import React, { useState } from 'react';

function App() {
  // 1. Define state. count = the value, setCount = the function to change it.
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#0f172a', color: 'white', minHeight: '100vh' }}>
      <h1>The Digital Memory (State)</h1>
      
      <div style={{ margin: '40px', padding: '20px', backgroundColor: '#1e293b', borderRadius: '12px' }}>
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(count + 1)} style={btnStyle}> + Increase </button>
        <button onClick={() => setCount(count - 1)} style={btnStyle}> - Decrease </button>
      </div>

      <div style={{ margin: '40px', padding: '20px', backgroundColor: '#1e293b', borderRadius: '12px' }}>
        <h2>Switch is: {isOn ? "🟢 ON" : "🔴 OFF"}</h2>
        <button onClick={() => setIsOn(!isOn)} style={btnStyle}> Flip Switch </button>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: '10px 20px',
  margin: '10px',
  fontSize: '1rem',
  cursor: 'pointer',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#6366f1',
  color: 'white'
};

export default App;
