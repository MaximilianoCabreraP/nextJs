import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            const index = state.items.findIndex((product) => product.id === action.payload.id);
            if (index !== -1) {
                state.items[index].quantity += 1;
            } else {
                action.payload.quantity = 1;
                action.payload.stock = 3;
                state.items.push(action.payload)
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.find((product) => product.id !== action.payload.id)
        },
        reduceFromCart: (state, action) => {
            const index = state.items.findIndex((product) => product.id === action.payload.id);
            let item = state.items[index];
            if (index !== -1) {
                item.quantity == 1 ? state.items.splice(index) : item.quantity--;
            } else {
                console.log("No existe el producto");
            }
        },
        sumToCart: (state, action) => {
            const index = state.items.findIndex((product) => product.id === action.payload.id);
            let item = state.items[index];
            if (index !== -1) {
                item.quantity < item.stock ? item.quantity++ : item.stock;
            } else {
                console.log("No existe el producto");
            }
        }
    }
})

const cartReducer = cartSlice.reducer
export default cartReducer

export const { addToCart, removeFromCart, reduceFromCart, sumToCart } = cartSlice.actions