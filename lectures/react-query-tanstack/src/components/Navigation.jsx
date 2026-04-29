import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-gray-300">
            My App
          </Link>
        </div>
        <div className="flex space-x-6">
          <Link 
            to="/" 
            className="hover:text-gray-300 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="hover:text-gray-300 transition-colors"
          >
            About
          </Link>
          <Link 
            to="/products" 
            className="hover:text-gray-300 transition-colors"
          >
            Products
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
