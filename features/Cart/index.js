import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: [{ name: "Producto 11" }],
    reducers: {
        addToCart: () => {
            //Agregar Funcionalidad
        }
    }
})

const cartReducer = cartSlice.reducer
export default cartReducer

export const { addToCart } = cartSlice.actions