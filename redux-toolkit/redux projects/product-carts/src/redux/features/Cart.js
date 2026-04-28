import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
         addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
         }, 
         removeFromCart: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter(item => item.id !== itemId);
         },
         increaseQty: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.items.find(item => item.id === itemId);
            if (existingItem) {
                 if(existingItem.quantity >=5){
                    toast.error("Maximum quantity reached for this item.");
                    return;
                 }
                existingItem.quantity += 1;
            }
         }, 
         decreaseQty: (state, action) => {
            const itemId = action.payload; 
            const existingItem = state.items.find(item => item.id === itemId);
            if(existingItem){
                if(existingItem.quantity === 1){
                    return
                }
                existingItem.quantity -=1;
            }
         }
    }
}) 

export const { addToCart, removeFromCart, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;