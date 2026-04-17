import React from 'react'

export const Product = () => {

    let products = [
  {
    id: 1,
    title: "Laptop",
    price: 1000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    description: "High-performance laptop suitable for work, gaming, and everyday tasks."
  },
  {
    id: 2,
    title: "Phone",
    price: 500,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    description: "Modern smartphone with excellent camera and long battery life."
  },
  {
    id: 3,
    title: "Headphones",
    price: 100,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    description: "Comfortable headphones with high-quality sound and noise isolation."
  },
  {
    id: 4,
    title: "Watch",
    price: 200,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    description: "Stylish wristwatch with premium design and durable build."
  }
];


    return (
        <>
            <div className='flex '>
                {
                    products.map((product) => {
                        return (
                            <div className='bg-gray-100 shadow-md rounded-lg p-4 border-gray-500 mt-2 mx-3 border-2 w-96'>
                                <img className=' object-contain' src={product.image} alt={product.title} />
                                <h1>{product.title}</h1>
                                <p className='text-gray-600'>{product.description}</p>
                                 
                                 <div className='flex items-center justify-between mt-5'>
                                    <h3>$ {product.price.toFixed(2)}</h3>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                    Add to Cart
                                </button>
                                 </div>
                                
                            </div>
                        )

                    })
                }

            </div>

        </>
    )
}
