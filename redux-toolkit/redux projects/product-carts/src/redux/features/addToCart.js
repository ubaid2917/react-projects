import { createSlice } from "@reduxjs/toolkit";

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
         }
    }
}) 

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;