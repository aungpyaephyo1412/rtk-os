import {createSlice} from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name:"Search",
    initialState:'',
    reducers:{
        search:(state,action)=>{
            return state = action.payload;
        }
    }
})
export const {search} = searchSlice.actions;
export default searchSlice.reducer