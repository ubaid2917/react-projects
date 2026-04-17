import React from 'react'

const Footer = (props) => {
  return (
    <div>
        <footer className='bg-emerald-950 text-white px-5 py-5 flex items-center justify-center mt-5  w-full'>
            <p>&copy; 2023 {props.name}. All rights reserved.</p>
        </footer>

    </div>
  )
}   

export default Footer
