import { useState } from 'react'
import './App.css'


function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])  

  function addTask(){
    if(task.trim() === "") return   
    
    setTasks([...tasks, { text: task, completed: false }])
    setTask("")    
  } 

  function handleChange(e){ 

    setTask(e.target.value)
  }

  function toggleTask(index){
    const updatedTasks = tasks.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    )

    setTasks(updatedTasks)
  }

  function deleteTask(index){
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  return (
    <div className='container'>
      <div className='todo-container'>

        <h2 className='todo-container-h1'>Todo List</h2>  

        <div className='input-section'> 
           <input type="text" className='input' value={task} onChange={handleChange} placeholder='Enter your task here' /> 
           <button className='add-btn' onClick={addTask}>+</button>
        </div>  

        <div className='list-section'>
          <h3>Your Task List</h3>  

          <ul>
            {tasks.map((t,index) => {
             return (
              <li className='last-list' key={index}>
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleTask(index)}
                />
                <span className={t.completed ? 'task-text completed' : 'task-text'}>
                  {t.text}
                </span>
                <button className='delete-btn' onClick={() => deleteTask(index)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 6h18" />
                    <path d="M8 6V4h8v2" />
                    <path d="M19 6l-1 14H6L5 6" />
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                  </svg>
                </button>
              </li>
             )
            })}
          </ul>
        </div>
      </div>
    </div>
  )


}

export default App
