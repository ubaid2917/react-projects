import React from 'react'
import NavbarComponent from './components/Navbar'
import CardComponent from './components/Card'
import AppRoutes from './routes/AppRoutes'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  console.log('app')
  return (
    <div>
      <NavbarComponent />
      <AppRoutes/>
      <ToastContainer />
    </div>
  )
}



export default App