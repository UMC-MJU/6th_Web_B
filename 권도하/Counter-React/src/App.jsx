import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  const increaseNumber = () => {
    console.log("increase가 클릭됨");
    setNumber(prevNumber => prevNumber + 1);
  };

  const decreaseNumber = () => {
    console.log("decrease가 클릭됨");
    setNumber(prevNumber => prevNumber - 1);
  };

  return (
    <div>
      <h2 id="number">{number}</h2>
      <button id="increase" onClick={increaseNumber}>+1</button>
      <button id="decrease" onClick={decreaseNumber}>-1</button>
    </div>
  );
}

export default App;
