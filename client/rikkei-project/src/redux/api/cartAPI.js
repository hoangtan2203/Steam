import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_API } from "../../config";

export const fetchAllCart = createAsyncThunk(
    'cart,fetchAllCart',
    async(thunkAPI)=>{
        const response = await axios.get(URL_API+'/api/cart/carts')
        return response.data
    }
);

export const fetchAddCart = createAsyncThunk(
    'cart,fetchAddCart',
    async(cart, thunkAPI)=>{
        const response = await axios.post(URL_API+'/api/cart/addcart',cart)
        return response.data
    }
);

export const deleteCart = createAsyncThunk(
    'cart,deleteCart ',
    async(id, thunkAPI)=>{
        const response = await axios.delete(URL_API+'/api/cart/deletecart/'+id)
        return response.data
    }
);

export const sumPriceCart = createAsyncThunk(
    'cart/sumPriceCart',
    async(thunkAPI)=>{
        const response = await axios.post(URL_API+"/api/cart/sumprice");
        return response.data
    }
)