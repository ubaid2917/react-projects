import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Card from './components/Card'

const App = () => {
  return (
   <>  
    <Header />
    <Main name="Ubaid Naeem" /> 
    {/* <Card name='ubaid' age="20"/> */}
    {/* <Card /> */}
    <Footer name="Ubaid Naeem" />
   </>
  )
}

export default App
