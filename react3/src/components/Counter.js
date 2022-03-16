import React, { useState } from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const addCount = () => {
      setCount(count+1);
  };
    
  const clickString = props.click || "none Click";
  return (
    <button onClick={addCount}>{clickString}{count}</button>
  );
};

export default Counter;