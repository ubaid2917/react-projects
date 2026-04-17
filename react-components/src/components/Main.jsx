import React from 'react'
import Card from './Card'

const Main = (props) => {
  return (
    <>
      <h1 className='text-3xl font-bold text-center mt-5'>Welcome {props.name}</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 justify-items-center'>
        <Card
          image="https://picsum.photos/400/300"
          title="Web Development"
          description="Learn modern web development using React and Tailwind CSS."
        />

        <Card
          image="https://picsum.photos/401/300"
          title="Backend Development"
          description="Build powerful APIs using Node.js and MySQL."
        />

        
        <Card
          image="https://picsum.photos/402/300"
          title="Full Stack"
          description="Become a complete full stack developer."
        />

         <Card
          image="https://picsum.photos/403/300"
          title="Web Development"
          description="Learn modern web development using React and Tailwind CSS."
        />


       
      </div>
    </>

  )
}

export default Main
