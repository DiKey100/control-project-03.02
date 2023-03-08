import { createSlice } from "@reduxjs/toolkit";
import { omit } from "lodash";

type ProductsInCart = {
    [id: number]: number
}

const initialState:ProductsInCart = {
    1: 3,
    2: 3
}

const cartSlice = createSlice({
    name: "productsInCart",
    initialState,
    reducers: {
        addProductToCart: (state, action) => ({
            ...state,
            [action.payload.id] : (state[action.payload.id] || 0) + action.payload.count
        }),
        deleteProduct: (state, action) => omit(state, action.payload),
        changeCount: (state, action) => ({
            ...state,
            [action.payload.id] : action.payload.count
        })
    }
})

export const { addProductToCart, deleteProduct, changeCount } = cartSlice.actions

export default cartSlice.reducer