import {configureStore} from "@reduxjs/toolkit";
import {AuthApi} from "../api/authApi.js";
import {searchSlice} from "../api/searchSlice.js";

export const store = configureStore({
    reducer:{
        [AuthApi.reducerPath] : AuthApi.reducer,
        search:searchSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(AuthApi.middleware),
})