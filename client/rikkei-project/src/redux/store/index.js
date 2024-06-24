import { configureStore } from "@reduxjs/toolkit";
import producSlice from "../reducer/reducer";
import userSlice from './../reducer/userSlice';
import cartReducer from './../reducer/cartSlice';

export const store = configureStore({
    reducer: {
        products: producSlice,
        users: userSlice,
        cart:  cartReducer
    }
})

