import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    let storedCount = localStorage.getItem('visitorCount');

    if (!hasVisited) {
      // This is a new visitor
      storedCount = storedCount ? parseInt(storedCount) + 1 : 1;
      localStorage.setItem('visitorCount', storedCount);
      localStorage.setItem('hasVisited', 'true');
    } else {
      // This visitor has been here before
      storedCount = storedCount ? parseInt(storedCount) : 0;
    }

    setCount(storedCount);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="App">
      <div className="container">
        <div className="counter">{count}</div>
        <h1>Have sat here before you!</h1>
        <p>that&#39;s a lot of asses</p>
    
      </div>
    </div>
  );
}

export default App;
