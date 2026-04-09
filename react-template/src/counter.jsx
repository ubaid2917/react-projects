import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);  

  function increment(){
    setCounter(counter + 1)
  }

  return (
    <div style={{ marginTop: "20px", color: "red" }}>
      <h3>Counter: {counter}</h3>
        

     <button onClick={()=> (setCounter(prev => prev+1))}>Increase Counter</button>
    </div>
  );
};

export default Counter;
