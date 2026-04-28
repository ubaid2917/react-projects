import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from '../pages/Cart'
import CardComponent from '../components/Card'

const AppRoutes = () => {
  return (
    <>
      <Routes>
           <Route path='/' element={<CardComponent />} />
           <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default AppRoutes