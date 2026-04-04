import { useState } from 'react'
import './App.css'


function App() {
  const [counter, setCounter] = useState(0);

  // increment 
  function increment() {
    setCounter(prev => prev + 1)
  }

  // decrement
  function decrement() {
    if (counter === 0) return false;
    setCounter(prev => prev - 1)
  }

  // reset counter
  function resetCounter() {
    if (counter == 0) return false;
    setCounter(0)
    alert('Counter Has Been Reset')
  }

  return (
    <>
      <h2>Counter: {counter}</h2>

      <button onClick={increment}>Increase Counter Val</button>  <br /> <br />

      <button onClick={decrement} disabled={counter === 0}>Decrease Counter</button> <br /> <br />

      <button onClick={resetCounter} disabled={counter === 0}>Reset Counter</button>


    </>
  )
}

export default App
