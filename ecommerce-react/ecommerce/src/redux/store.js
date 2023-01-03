import {configureStore} from "@reduxjs/toolkit";

import products from '../redux/slices/productsSlice'
import aboutProduct from '../redux/slices/aboutProductSlice'


export const store = configureStore({
    reducer: {
        products,
        aboutProduct,
    }
})