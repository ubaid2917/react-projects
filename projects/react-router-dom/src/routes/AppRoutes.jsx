import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Product from '../pages/Product'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Header from '../Components/Header'
const AppRoutes = () => {
    return ( 
        <>
        <Header/>
        <Routes>
            <Route path="/about" element={<About />} />

            <Route path="/products" element={<Product />} />  

            <Route path='/gallery' element={<Gallery/>} />  

            <Route path='/contact' element={<Contact/>} />   

            <Route path='/' element={<Home/>} />

        </Routes>
        </>
    )
}

export default AppRoutes
