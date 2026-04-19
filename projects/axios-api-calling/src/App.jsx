import React, { useEffect, useState } from 'react'
import Card from './Components/Card'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])   
  async function fetchUserData() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log('response', response)
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUserData()
    console.log('data', data)
  }, [])


  return (
    <div>
      <h1 className='text-2xl text-center'>Axios Api Calling</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {data.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default App