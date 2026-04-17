import React from 'react'

const Card = (props) => {
  return (
    <div className="max-w-sm mx-3 my-4 rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300">

      {/* Image */}
      <img
        className="w-full h-48 object-cover"
        src={props.image}
        alt={props.title}
      />

      {/* Content */}
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">
         {props.title}
        </h2>

        <p className="text-gray-600 text-base">
          {props.description}
        </p>
      </div>

      {/* Button */}
      <div className="flex items-center px-4 pb-4">
        <button className="mx-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Learn More
        </button>
      </div>

    </div>
  )
}

export default Card