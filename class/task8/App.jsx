import React, { useState, useEffect } from 'react';

function App() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100vh',
            fontFamily: 'Arial, sans-serif',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white'
        }}>
            <h1>Window Size Tracker</h1>
            <div style={{ 
                padding: '20px', 
                borderRadius: '10px', 
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
            }}>
                <p>Width: <strong>{windowSize.width}px</strong></p>
                <p>Height: <strong>{windowSize.height}px</strong></p>
            </div>
            <p style={{ marginTop: '20px' }}>Try resizing your browser window!</p>
        </div>
    );
}

export default App;
