import React, { useState } from 'react';
import Counter from './components/Counter.js'

function App() {
  const [buttonName, setButtonName] = useState('클릭');
  const ClickButton = () => {
    setButtonName('UpdateClick');
  };
  return (
    <div className="App">
      <header className="App-header">
        <Counter click="now click" />
        <Counter click={buttonName}/>
        <Counter />

        <button onClick={ClickButton}>Click</button>
      </header>
    </div>
  );
}

export default App;
