import { createSlice } from "@reduxjs/toolkit";

const initialState={
currentUser:JSON.parse(localStorage.getItem("user")) || null,
loading:false,
error:null
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.loading = true;
        },
        signInSuccess:(state,action)=>{
            state.loading=false;
            const data = action.payload;
            localStorage.setItem("user",JSON.stringify(data));
            state.currentUser = JSON.parse(localStorage.getItem("user"));
            state.error = null;
        },
        signInFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload
        },
        userUpdateStart:(state)=>{
            state.loading = true;
        },
        userUpdateSuccess:(state,action)=>{
            state.loading= false;
            const data = action.payload
            localStorage.setItem("user",JSON.stringify(data));
            state.currentUser = JSON.parse(JSON.parse(localStorage.getItem("user")));
            state.error = null
        },
        userUpdateFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
        deleteUserSuccess:(state)=>{
            state.loading = false;
            state.loading = null;
            localStorage.setItem("user",null);
            state.currentUser = null
        },
        deleteUserFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        } 
    }
})

export const {signInStart,signInFailure,signInSuccess,deleteUserFailure,deleteUserSuccess,userUpdateFailure,userUpdateStart,userUpdateSuccess} = userSlice.actions;
export default  userSlice.reducer