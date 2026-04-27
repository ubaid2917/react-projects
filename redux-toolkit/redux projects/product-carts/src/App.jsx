import React from 'react'
import NavbarComponent from './components/Navbar'
import CardComponent from './components/Card'

const App = () => {
  return (
    <div>
      <>
         <NavbarComponent/>
            <h1 className='mt-2 px-2'>Product Carts</h1> 
          <CardComponent/>
     
     
      </>
    </div>
  )
}

export default App