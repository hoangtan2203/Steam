import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCart, fetchAddCart,deleteCart, sumPriceCart } from "../api/cartAPI";



// const token = jwtDecode(getCookie('token'));
const cartReducer = createSlice({
    name:'cart',
    initialState:{
        // userID:token.id,
        total:null,
        data:[],
        cart: JSON.parse(localStorage.getItem('cartitems'))||[],
        isLoading:false,
        isSuccess:false,
        errorMessage:'',
    },  
    reducers:{
        addItem: (state,action)=> {
            try {
            const isExist = state.cart.findIndex((g)=>g.id === action.payload.id)
            if(isExist === -1){
                const newgame = action.payload
                state.cart.push(newgame)
                localStorage.setItem('cartitems', JSON.stringify(state.cart))
            }else{
                console.log("Product already exists in the cart");
            }
            } catch (error) {
                console.log('err',error)
            }
        },
        deleteItem:(state,action)=>{
            try {
            const idItem = action.payload;
                const newList =  state.cart.filter(item=> item.id !== idItem );
                localStorage.setItem('cartitems',JSON.stringify(newList));
                state.cart = newList
            } catch (error) {
                error = 'delete fail'
            }
        },
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
export const {addItem,deleteItem} = cartReducer.actions;
export default reducer;