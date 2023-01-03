import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAboutProduct = createAsyncThunk(
    'product/fetchAboutStatus', async (params) => {
        const {id} = params
        const productResp = await axios.get(`http://127.0.0.1:8000/product/${id}`)
        return productResp.data
    }
)

const initialState = {
    product: [],
    status: 'loading'
}

const aboutProductSlice = createSlice({
    name: "aboutProduct",
    initialState,
    reducers: {
        setProduct(state, action){
            state.product = action.payload
        }
    },

    extraReducers: {
        [fetchAboutProduct.pending]: (state) => {
            state.status = 'loading'
            state.product = []
        },

        [fetchAboutProduct.fulfilled]: (state, action) => {
            state.status = 'success'
            state.product = action.payload
        },

        [fetchAboutProduct.rejected]: (state) => {
            state.status = 'error'
            state.product = []
        }
    }
})

export const { setProduct } = aboutProductSlice.actions

export default aboutProductSlice.reducer