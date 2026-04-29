import React from 'react'
import AppRoutes from './routes/AppRoutes'
import Navigation from './components/Navigation'

const App = () => {
  return (
    <div className='min-h-screen'>
      <Navigation />
      <AppRoutes />
    </div>
  )
}

export default App