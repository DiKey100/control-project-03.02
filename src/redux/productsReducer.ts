import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type Product = {
    id: number
    title: string
    price: number
    color: string
    image: string
    category: string
}

export const fetchProducts = createAsyncThunk("products/fetchProducts",
    async () => {
        const response = await axios.get("https://run.mocky.io/v3/b3899bb8-aa9f-4445-a361-b9264e048b30")
        return response.data.products
    }
)

const initialState:Product[] = []

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return state = action.payload
        })
    }
})

export default productSlice.reducer