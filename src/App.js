import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        
        <p>You clicked {count} times</p>

        <form>
          <label>
            Name <br/>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </label>
          <input 

            type="button" 
            value="Submit" 
            onClick={e => {
              setCount(count + 1)
              setName("")
            }}

          />
        </form>

      </header>
    </div>
  );
}

export default App;
