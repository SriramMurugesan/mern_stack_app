/* 
  EXAMPLE 1: Components & Props
  -----------------------------
  How to run: Copy this code and paste it into 'src/App.jsx' of your lab project.
*/

import React from 'react';

// 1. A child component that receives 'name' and 'color' as Props
const UserBadge = (props) => {
  return (
    <div style={{ 
      border: `2px solid ${props.color}`, 
      padding: '10px', 
      margin: '10px',
      borderRadius: '8px',
      display: 'inline-block'
    }}>
      <h3>User: {props.name}</h3>
      <p>Status: Active</p>
    </div>
  );
};

// 2. The Parent component passing unique data to each child
function App() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#121212', color: 'white', minHeight: '100vh' }}>
      <h1>React Lego Bricks (Components)</h1>
      <p>Each badge below is the same "component", but with different "props".</p>
      
      <UserBadge name="Sriram" color="#6366f1" />
      <UserBadge name="Antigravity" color="#10b981" />
      <UserBadge name="Student" color="#f59e0b" />
    </div>
  );
}

export default App;
