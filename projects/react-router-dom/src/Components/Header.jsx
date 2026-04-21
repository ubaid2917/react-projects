import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex items-center justify-between bg-gray-200 p-4 mb-5'>
        <h2 className='text-2xl font-semibold text-gray-900'>Ubaid Naeem</h2>
        <nav className='flex flex-wrap gap-4'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/products">Product</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </header>  
    
  )
}

export default Header
