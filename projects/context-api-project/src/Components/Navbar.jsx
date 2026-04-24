import React from 'react' 
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../Context/CartContext'


const Navbar = () => { 
  const {cart} = useCart()
  return (
    <div className='flex justify-between px-5 bg-gray-200 p-5 rounded-lg'>
       <h2>Ubaid Naeem</h2>

      
         <ul className='flex gap-5 '>
           <li><a href="#home">Home</a></li>
           <li><a href="#about">About</a></li>
           <li><a href="#contact">Contact</a></li> 

           {/* cart icon */} 
            <li className='relative cursor-pointer'>
          <FaShoppingCart size={20} />

          {/* Optional badge */}
          <span className='absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1 rounded-full'>
            {cart.length}
          </span>
        </li>

         </ul> 


   
    </div>
  )
}

export default Navbar
