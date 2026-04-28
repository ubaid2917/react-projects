import React from 'react'
import NavbarComponent from './components/Navbar'
import CardComponent from './components/Card'
import AppRoutes from './routes/AppRoutes'
const App = () => {
  return (
    <div>
      <NavbarComponent />
      <AppRoutes/>
    </div>
  )
}



export default App