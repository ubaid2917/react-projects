import { createContext, useContext, useState,  } from "react";
import { toast } from 'react-toastify';

const CartContext = createContext(); 

export const CartProvider = ({ children }) => {
   const [cart, setCart] = useState([])

   const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
         toast.success('Product quantity increased!', {
         })
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        ) 
       
      } else {
        toast.success('Product added to cart!')
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
   }   

   const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id) )
      toast.error('Product removed from cart!')
   }

     return (
    <CartContext.Provider value={{ cart, addToCart , removeFromCart}}>
      {children}
    </CartContext.Provider>
  )
}
export const useCart = () => {
    return useContext(CartContext)
}
