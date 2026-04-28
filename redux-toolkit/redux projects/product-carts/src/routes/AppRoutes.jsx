import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from '../Pages/Cart'
import CardComponent from '../components/Card'

const AppRoutes = () => {
  return (
    <>
      <Routes>
           <Route path='/' element={
             <div>
               <CardComponent />
             </div>
           } />
           <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default AppRoutes