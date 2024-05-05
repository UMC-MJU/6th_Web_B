import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const onIncrease = () => {
    setCount((prev) => prev + 1);
    console.log("increase 클릭!");
  }
  const onDecrease = () => {
    setCount((prev) => prev - 1);
    console.log("decrease 클릭!");
  }
  return (
    <>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </>
  )
}

export default App
