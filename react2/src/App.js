import React, { useState,useEffect } from 'react';
import Counter from './components/Counter.js'

function App() {
  //#useEffect
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState(0);

  // useEffect(() => {
  //   console.log(count);
  // }, [count,name]); // []안에 있는 state가 변경될때만 useEffect 랜더링
  
  // useEffect(() => {
  //   console.log("first rendering")
  // },[]); // []가 비어있다면 한번만 랜더링됨

  // const addCount = () => {
  //   setCount(count+1);
  // };
  // const addCount2 = () => {
  //   setName(name+1);
  // };
  
  return (
    <div className="App">
      <h1>Ayumu</h1>
      {/* <span>{count}</span>
      <button onClick={addCount}>plus</button>
      <br /> <br />
      <span>{name}</span>
      <button onClick={addCount2}>plus2</button> */}

      {/* component */}
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
