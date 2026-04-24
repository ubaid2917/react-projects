import { Route, Routes } from "react-router-dom"
import Card from "../Components/Card"
import About from "../Components/About"

const AppRoutes = () => {
  return (
     <Routes>
        <Route path='/' element={<Card />} />
        <Route path='/home' element={<Card />} />
        <Route path='/about' element={<About />} />
     </Routes>
  )
}

export default AppRoutes
