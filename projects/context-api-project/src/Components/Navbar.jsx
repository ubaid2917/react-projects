import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-5 bg-gray-200 p-5 rounded-lg'>
       <h2>Ubaid Naeem</h2>

      
         <ul className='flex gap-5 '>
           <li><a href="#home">Home</a></li>
           <li><a href="#about">About</a></li>
           <li><a href="#contact">Contact</a></li>
         </ul>
   
    </div>
  )
}

export default Navbar
