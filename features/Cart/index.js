import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const saveCart = createAsyncThunk("cart/saveCart", async (cart, { getState }) => {
    const { cart: { items } } = getState();

    const result = await fetch("http://localhost:3000/api/cart", {
        method: "POST",
        body: JSON.stringify({ username: "Meme", data: { items } }),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const data = await result.json();

    return data;
})
export const getCart = createAsyncThunk("cart/getCart", async () => {
    const result = await fetch("http://localhost:3000/api/cart/get", {
        method: "POST",
        body: JSON.stringify({ username: "Meme" }),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const data = await result.json();

    return data;
})


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        loading: false,
        error: false,
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            console.log("Producto", { ...action.payload })

            console.log("State: ", state);
            console.log("State items: ", state.items);
            if (state.items) {
                console.log("1");
            } else {
                console.log("2");
            }
            const index = state.items.findIndex(product => product.id === action.payload.id)
            if (index !== -1) {
                state.items[index].quantity += 1;
            } else {
                const newObject = { ...action.payload, quantity: 1 };
                state.items.push(newObject);
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
    },
    extraReducers(builder) {
        builder.addCase(saveCart.pending, (state, action) => {
            state.loading = true;
        }).addCase(saveCart.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
        }).addCase(saveCart.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
        }).addCase(getCart.pending, (state, action) => {
            state.loading = true;
        }).addCase(getCart.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            state.items = action.payload.items;
        }).addCase(getCart.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
        })
    }
})

const cartReducer = cartSlice.reducer
export default cartReducer

export const { addToCart, removeFromCart, reduceFromCart, sumToCart } = cartSlice.actions