import React, { useContext } from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Contact from './components/Contact'
import {DataContext} from './context/UserContext'

const App = () => { 
   
  const data = useContext(DataContext)
   console.log('data from context', data)
  return (
    <div>
      <h1>This is my app</h1>
      <Header />
      <Section />
      <Contact />
    </div>
  )
}

export default App
