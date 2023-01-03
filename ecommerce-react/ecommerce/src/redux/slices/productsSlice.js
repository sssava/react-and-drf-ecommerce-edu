import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk(
    'products/fetchProductsStatus', async () => {
        const productResp = await axios.get('http://127.0.0.1:8000/home/')
        return productResp.data
    }
)

const initialState = {
    products: [],
    status: 'loading',
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts(state, action){
            state.products = action.payload
        }
    },

    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.status = 'loading'
            state.products = []
        },

        [fetchProducts.fulfilled]: (state, action) => {
            state.status = 'success'
            state.products = action.payload
        },

        [fetchProducts.rejected]: (state) => {
            state.status = 'error'
            state.products = []
        }
    }
})

export const { setProducts } = productsSlice.actions

export default productsSlice.reducer