import React from 'react'
import Navbar from '../Components/Navbar'
import { useCart } from '../Context/CartContext'

const Cart = () => {
    const {cart, removeFromCart} = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0)

  return (
    <>
      <Navbar />

      <div className='min-h-screen bg-gray-50 px-4 py-8'>
        <div className='mx-auto max-w-6xl'>
          <div className='mb-6 flex items-end justify-between gap-4'>
            <div>
              <h1 className='text-2xl font-bold text-gray-900'>Shopping Cart</h1>
              <p className='mt-1 text-sm text-gray-500'>{cart.length} items in your cart</p>
            </div>

            <p className='text-lg font-semibold text-gray-900'>${totalPrice.toFixed(2)}</p>
          </div>

          {cart.length === 0 ? (
            <div className='rounded-lg border border-dashed border-gray-300 bg-white p-10 text-center shadow-sm'>
              <h2 className='text-lg font-semibold text-gray-900'>Your cart is empty</h2>
              <p className='mt-2 text-sm text-gray-500'>Add products to your cart and they will show here.</p>
            </div>
          ) : (
            <div className='grid gap-6 lg:grid-cols-[1fr_320px]'>
              <div className='space-y-4'>
                {cart.map((item, index) => (
                  <div key={`${item.id}-${index}`} className='flex gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm'>
                    <img src={item.image} alt={item.name} className='h-24 w-24 rounded-lg object-cover' />

                    <div className='flex flex-1 flex-col justify-between gap-3 sm:flex-row sm:items-center'>
                      <div>
                        <h3 className='font-semibold text-gray-900'>{item.name}</h3>
                        <p className='mt-1 max-w-xl text-sm text-gray-500'>{item.description}</p>
                        <p className='mt-1 text-sm text-gray-600'>Quantity: {item.quantity || 1}</p>
                      </div>

                      <p className='shrink-0 text-base font-semibold text-green-600'>${item.price.toFixed(2)}</p>
                      <button onClick={() => removeFromCart(item.id)}
                        className='shrink-0 rounded-md bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600'
                        >Remove</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className='h-fit rounded-lg border border-gray-200 bg-white p-5 shadow-sm'>
                <h2 className='text-lg font-semibold text-gray-900'>Order Summary</h2>

                <div className='mt-4 space-y-3 text-sm'>
                  <div className='flex justify-between text-gray-600'>
                    <span>Items</span>
                    <span>{cart.length}</span>
                  </div>

                  <div className='flex justify-between text-gray-600'>
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>

                  <div className='border-t border-gray-200 pt-3'>
                    <div className='flex justify-between text-base font-semibold text-gray-900'>
                      <span>Total</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
      </div>
    </>
  )
}

export default Cart
