import { Route, Routes } from "react-router-dom"
import Card from "../Components/Card"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Cart from "../pages/Cart"

const AppRoutes = () => {
  return (
     <Routes>
        <Route path='/' element={<Card />} />
        <Route path='/home' element={<Card />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
     </Routes>
  )
}

export default AppRoutes
