import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_API } from "../../config";
import { headerUploadFiles } from "../../config";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (thunkAPI) => {
            const response = await axios.get(URL_API+ "/api/product/task")
            // console.log("responseDâta",response.data);
            return response.data
    }
);

export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async (id,thunkAPI) => {
            const respose = await axios.delete(URL_API+id);
            return respose.data
    }
)

export const createProduct = createAsyncThunk(
    'products/createTodo',
    async(products, thunkAPI) => {
        const response = await axios.post(URL_API+"/api/product/create-new-product", products,headerUploadFiles);
        console.log('createNewProduct',response.data)
        return response.data
    }
)

export const updateProduct = createAsyncThunk(
    "products/updateProduct",
    async (thunkAPI) => {
            const respose = await axios.put(URL_API);
            return respose.data
    }
)

