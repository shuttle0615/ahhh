import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();

      if (count > 19 || count === "Experiment finished. Please reload") {
        setCount("Experiment finished. Please reload")
      }else {
        setCount(count + 1)
        setName("")
      }

    }
  };

  return (
    <div className="App">
      <header className="App-header">
        
        <p># {count} </p>

        <form>
          <label>

            <input 
              className="App-input"
              type="text" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              onKeyPress={handleKeyPress}
            />

          </label>
        </form>

      </header>
    </div>
  );
}

export default App;
