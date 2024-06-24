import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCart, fetchAddCart,deleteCart, sumPriceCart } from "../api/cartAPI";

const cartReducer = createSlice({
    name:'cart',
    initialState:{
        total:null,
        data:[],
        isLoading:false,
        isSuccess:false,
        errorMessage:''
    },
    reducers:{
        cartItem: (state,{payload})=> {
            const {id} = payload;
            const doesItemExist = state.findItem(x=>x.id === id);
            if(doesItemExist){
                return state.data?.map((item)=>{
                    if(item.id === id){
                        return {...item}
                    }
                    return item
                })
            }else{
                state.data.push(...payload)
            }
        }
    },
    extraReducers:(builder) => {
        builder
        // lấy data từ cart
        .addCase(fetchAllCart.fulfilled,(state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload
        })
        .addCase(fetchAllCart.pending,(state, action)=>{
            state.isLoading = true;
        })
        .addCase(fetchAllCart.rejected,(state, action)=>{
            state.errorMessage = 'No data'
        })
        // thêm sản phẩm vào cart
        .addCase(fetchAddCart.fulfilled,(state, action)=>{
            state.isSuccess = true;
            state.isLoading = false;
            state.data = action.payload
        })
        .addCase(fetchAddCart.pending,(state, action)=>{
            state.isLoading = true;
        })
        .addCase(fetchAddCart.rejected,(state, action)=>{
            state.errorMessage = 'Can not add to cart'
        })
        // xóa sản phẩm
        .addCase(deleteCart.fulfilled,(state, action)=>{
            state.isSuccess = true;
            state.isLoading = false;
            state.data = action.payload
        })
        .addCase(deleteCart.pending,(state, action)=>{
            state.isLoading = true;
        })
        .addCase(deleteCart.rejected,(state, action)=>{
            state.errorMessage = 'Can not add to cart'
        })
        // cộng tổng cart
        .addCase(sumPriceCart.fulfilled,(state, action)=>{
            state.isSuccess = true;
            state.isLoading = false;
            state.total = action.payload
        })
        .addCase(sumPriceCart.pending,(state, action)=>{
            state.isLoading = true;
        })
        .addCase(sumPriceCart.rejected,(state, action)=>{
            state.errorMessage = 'can not sum()'
        })
    }
});

const {reducer} =  cartReducer;

export default reducer;