import React from 'react'

const Card = () => { 
    const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    description: "High-quality wireless headphones with noise cancellation and long battery life.",
    price: 59.99,
    image: "https://picsum.photos/seed/headphones/300/300"
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness, heart rate, and notifications with this stylish smartwatch.",
    price: 79.99,
    image: "https://picsum.photos/seed/smartwatch/300/300"
  },
  {
    id: 3,
    name: "Gaming Mouse",
    description: "Ergonomic gaming mouse with customizable RGB lighting and high precision.",
    price: 29.99,
    image: "https://picsum.photos/seed/mouse/300/300"
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    description: "Durable mechanical keyboard with tactile switches and backlit keys.",
    price: 89.99,
    image: "https://picsum.photos/seed/keyboard/300/300"
  },
  {
    id: 5,
    name: "Portable Power Bank",
    description: "10000mAh power bank to keep your devices charged on the go.",
    price: 24.99,
    image: "https://picsum.photos/seed/powerbank/300/300"
  },
  {
    id: 6,
    name: "USB-C Fast Charger",
    description: "Fast charging USB-C adapter compatible with smartphones and tablets.",
    price: 19.99,
    image: "https://picsum.photos/seed/charger/300/300"
  },
  {
    id: 7,
    name: "Laptop Stand",
    description: "Adjustable aluminum laptop stand for better posture and airflow.",
    price: 34.99,
    image: "https://picsum.photos/seed/laptopstand/300/300"
  },
  {
    id: 8,
    name: "Wireless Speaker",
    description: "Compact Bluetooth speaker with deep bass and waterproof design.",
    price: 44.99,
    image: "https://picsum.photos/seed/speaker/300/300"
  },
  {
    id: 9,
    name: "External Hard Drive",
    description: "1TB external hard drive for secure data storage and backup.",
    price: 69.99,
    image: "https://picsum.photos/seed/harddrive/300/300"
  },
  {
    id: 10,
    name: "HD Webcam",
    description: "1080p HD webcam ideal for video conferencing and streaming.",
    price: 39.99,
    image: "https://picsum.photos/seed/webcam/300/300"
  },
  {
    id: 11,
    name: "LED Desk Lamp",
    description: "Energy-efficient LED desk lamp with adjustable brightness levels.",
    price: 27.99,
    image: "https://picsum.photos/seed/desklamp/300/300"
  },
  {
    id: 12,
    name: "Noise Cancelling Earbuds",
    description: "True wireless earbuds with active noise cancellation technology.",
    price: 64.99,
    image: "https://picsum.photos/seed/earbuds/300/300"
  },
  {
    id: 13,
    name: "Tablet Sleeve",
    description: "Protective sleeve designed to keep your tablet safe from scratches.",
    price: 15.99,
    image: "https://picsum.photos/seed/tabletsleeve/300/300"
  },
  {
    id: 14,
    name: "Wireless Charging Pad",
    description: "Convenient wireless charger compatible with Qi-enabled devices.",
    price: 22.99,
    image: "https://picsum.photos/seed/chargingpad/300/300"
  },
  {
    id: 15,
    name: "Fitness Tracker",
    description: "Lightweight fitness tracker to monitor steps, calories, and sleep.",
    price: 49.99,
    image: "https://picsum.photos/seed/fitnesstracker/300/300"
  }
];

  return (
    <div className='px-4 py-6'>
        <h2 className='text-2xl font-semibold mb-6'>Products</h2>
            <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                {products.map((product) => (
                    <div key={product.id} className='max-w-sm border p-4 rounded-xl shadow-sm bg-white'>
                        <img src={product.image} alt={product.name} className='w-full h-40 object-cover mb-3 rounded-lg' />
                        <h3 className='text-base font-semibold mb-1'>{product.name}</h3>
                        <p className='text-sm text-gray-600 mb-3 line-clamp-2'>{product.description}</p>
                        <div className='flex items-center justify-between'>
                            <p className='text-green-600 font-semibold'>${product.price}</p>
                            <button className='px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition'>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Card
