import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./UserReducer"


const store = configureStore({
    reducer:{
        user:userReducer
    },
    middleware:(getDefaultMiddleware)=>{

        return getDefaultMiddleware ({
            serializableCheck:false,
        })
    }
})

export default store;