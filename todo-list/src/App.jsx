import { useState } from 'react'
import './App.css'


function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])  

  function addTask(){
    if(task.trim() === "") return   
    
    console.log("task", task)

    setTasks([...tasks, task])
    setTask("")    
  } 

  function handleChange(e){ 

    setTask(e.target.value)
  }

  return (
    <div className='container'>
      <div className='todo-container'>

        <h2 className='todo-container-h1'>Todo List</h2>  

        <div className='input-section'> 
           <input type="text" value={task} onChange={handleChange} placeholder='Enter your task here' /> 
           <button onClick={addTask}>Add</button>
        </div>  

        <div className='list-section'>
          <h3>Your Task List</h3>  

          <ul>
            {tasks.map((t,index) => {
             return <li className='last-list' key={index}>{t}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )


}

export default App
