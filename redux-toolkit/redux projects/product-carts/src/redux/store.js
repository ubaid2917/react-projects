import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/addToCart";

 const store = configureStore({
    reducer: {
        cart: cartReducer
    }
}) 
export default store;