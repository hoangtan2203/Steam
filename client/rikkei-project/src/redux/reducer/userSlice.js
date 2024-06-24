import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, deleteUserById, registerUser, loginUser,userLogout } from "../api/userAPI";

const userSlice = createSlice({
    name:'users',
    initialState:{
        data:[],
        user:[],
        userLogin:[],
        isLoading: false,
        isSuccess:false,
        errorMessage:''
    },
    reducers:{},
    extraReducers:(builder) => {
        builder
        // fetching user data from database
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload
        })
        .addCase(fetchUsers.pending,(state,action)=>{
            state.isLoading = true;
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            state.errorMessage = action.payload
        })

        // delete user from database
        .addCase(deleteUserById.fulfilled,(state,action)=>{
            state.isSuccess = true;
            state.isLoading = false;
            state.data = action.payload
        })
        .addCase(deleteUserById.pending,(state,action)=>{
            state.isLoading = true;
        })
        .addCase(deleteUserById.rejected,(state,action)=>{
            state.isSuccess = false;
            state.errorMessage = 'error'
        })
        
        // User register
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.isSuccess = true;
        })
        .addCase(registerUser.pending,(state,action)=>{
            state.isLoading = true;
        })
        .addCase(registerUser.rejected,(state,action)=>{
            state.errorMessage = action.payload
        })
        // User Login
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.userLogin = action.payload;
        })
        .addCase(loginUser.pending,(state,action)=>{
            state.isLoading = true;
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.errorMessage = action.payload
        })

        // User Log-out
        .addCase(userLogout.fulfilled,(state,action)=>{
            state.userLogin = action.payload;
            state.isLoading = false;
            state.isSuccess = true
        })
        .addCase(userLogout.pending,(state,action)=>{
            state.isLoading = true
        })
        .addCase(userLogout.rejected,(state,action)=>{
            state.errorMessage = 'something wrong !'
        })
    }
});
const {reducer} = userSlice;
export default reducer;