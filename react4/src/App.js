import React, { useEffect, useState } from 'react';

function App() {
  const [condition, setCondition] = useState(false);
  const Toggle = () => {
    setCondition(!condition);
  };
  // useEffect(() => {
  //   console.log(condition);
  // }, [condition]);
  
  const renderCondigion = condition ? 'True' : 'False'
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>ayumu</h1>
        <div>
          {renderCondigion}
        </div>
        <button onClick={Toggle}>Toggle</button>
      </header>
    </div>
  );
}

export default App;
