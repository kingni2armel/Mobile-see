import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAlluser } from "../../api/auth";

const initialState = {
    status: "idle",
    data: {},
    error: null,
  };
export const  all_user =  createAsyncThunk('alluser',getAlluser)
const  getalluserSlice = createSlice({
    name:"alluser",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(all_user.pending,(state,{payload})=>{
            state.status= "loanding"
        })
        builder.addCase(all_user.fulfilled,(state,{payload})=>{
            state.status="succeeded"
            state.data=payload.data
            state.error=null
        })
        builder.addCase(all_user.rejected,(state,{payload})=>{
            state.status="failed"
            state.error=action.error
        })
    }
})
export const getalluserSelector =  (state)=>state.getAllusers
export default getalluserSlice.reducer
