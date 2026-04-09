import React, { useState } from "react";
import Counter from "./counter";


function App() {

  // variables
  const age = 20;   

  // use state
   const [name, setName] = useState('Ubaid');


  // function 
  const changeUser = ()=>{
    setName("Ubaid Naeem")
  } 

  // default User name  
  const setDefault = () => {
    setName("Ubaid")
  }


  return (
    <>
      {/* variable calling */}
      <h1>Hi {name}, your age is {age}</h1>

      <button onClick={changeUser}>Change Name</button> 

      <button onClick={setDefault}>Set Default</button> 


        
        <Counter/>
      

    </>
  )
}

export default App