import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    currentUser:JSON.parse(localStorage.getItem("user")) || null,
    loading:false,
    error:null
}
console.log(initialState.currentUser);
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.loading=true;
        },
        signInSuccess:(state,action)=>{
            state.loading=false;
            const data = action.payload;
            localStorage.setItem("user",null);
            localStorage.setItem("user",JSON.stringify(data));
            console.log("state.currentUser------>",state.currentUser);
            state.currentUser = JSON.parse(localStorage.getItem("user"));
            state.error=null;
        },
        signInFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const{signInStart,signInSuccess,signInFailure} = userSlice.actions;
export default userSlice.reducer;