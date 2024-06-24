import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, createProduct,deleteProduct,updateProduct } from './../api/productAPI';

const producSlice = createSlice({
    name:'products',
    initialState: {
    data:[],
    isLoading:false,
    isSuccess:false,
    errorMessage:''
    },
    extraReducers: (builder)=>{
        builder
        // lấy data từ server
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        })
        .addCase(fetchProducts.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.errorMessage = action.payload;
        })

        // tạo một sản phẩm mới
        .addCase(createProduct.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        })
        .addCase(createProduct.pending,(state,action)=>{
            state.isLoading = true;
            state.isSuccess = false;
            state.errorMessage = "Loading..."
        })
        .addCase(createProduct.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = "fail";
        })

        // cập nhật sản phẩm
        .addCase(updateProduct.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.isSuccess = true
        })

        // xóa một sản phẩm theo ID
        .addCase(deleteProduct.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.isSuccess = true
        })
    }
});
const {reducer} = producSlice
export default reducer;


