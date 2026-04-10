import React, { useState } from "react";
import Counter from "./counter";
import "./App.css"

function App() {

  // variables
  // const age = 20;   

  // // use state
  //  const [name, setName] = useState('Ubaid');


  // // function 
  // const changeUser = ()=>{
  //   setName("Ubaid Naeem")
  // } 

  // // default User name  
  // const setDefault = () => {
  //   setName("Ubaid")
  // }


  // return (
  //   <>
  //     {/* variable calling */}
  //     <h1>Hi {name}, your age is {age}</h1>

  //     <button onClick={changeUser}>Change Name</button> 

  //     <button onClick={setDefault}>Set Default</button> 



  //       <Counter/>


  //   </>
  // )  


  //*  =========== Counter App ===========    
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="container">
        <h3>Counter App</h3>  

        <h1>{counter}</h1>
      </div>


    </>
  )
}

export default App