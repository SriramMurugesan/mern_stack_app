/* 
  EXAMPLE 3: useEffect (The Side-Effect Butler)
  --------------------------------------------
  How to run: Copy this code and paste it into 'src/App.jsx' of your lab project.
*/

import React, { useState, useEffect } from 'react';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      // This is a "side effect" - we are starting a timer that lives outside React's UI
      console.log("Timer Started!");
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      console.log("Timer Paused");
      clearInterval(interval);
    }

    // Cleanup function: React runs this when the component disappears or dependencies change
    return () => clearInterval(interval);
  }, [isRunning]); // This Effect only runs when 'isRunning' changes

  return (
    <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#020617', color: 'white', minHeight: '100vh' }}>
      <h1>The Side-Effect Butler (useEffect)</h1>
      <p>This demo uses a timer that runs in the background.</p>
      
      <div style={{ fontSize: '4rem', fontWeight: 'bold', margin: '20px' }}>
        {seconds}s
      </div>

      <button 
        onClick={() => setIsRunning(!isRunning)} 
        style={{...btnStyle, backgroundColor: isRunning ? '#ef4444' : '#22c55e'}}
      >
        {isRunning ? "Pause Timer" : "Start Timer"}
      </button>

      <button onClick={() => setSeconds(0)} style={btnStyle}>Reset</button>
      
      <p style={{ marginTop: '20px', opacity: 0.6 }}>Check your browser console (F12) to see the logs!</p>
    </div>
  );
}

const btnStyle = {
  padding: '12px 24px',
  margin: '10px',
  fontSize: '1rem',
  cursor: 'pointer',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#334155',
  color: 'white'
};

export default App;
