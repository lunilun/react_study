import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const addCount = () => {
        setCount(count+1);
    };

    return (
      <button onClick={addCount}>Buton{count}</button>
    );
};

export default Counter;