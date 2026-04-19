import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Product from '../pages/Product'
import Gallery from '../pages/Gallery'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />

            <Route path="/products" element={<Product />} />  

            <Route path='/gallery' element={<Gallery/>} />

        </Routes>
    )
}

export default AppRoutes
