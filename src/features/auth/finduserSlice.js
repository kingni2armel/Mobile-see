import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { findUser } from "../../api/auth";

const initialState = {
    status: "idle",
    data: {},
    error: null,
  };
export const  finduser =  createAsyncThunk('finduser',findUser)
const  finduserSlice = createSlice({
    name:"finduser",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(finduser.pending,(state,{payload})=>{
            state.status= "loanding"
        })
        builder.addCase(finduser.fulfilled,(state,{payload})=>{
            state.status="succeeded"
            state.data=payload.data
            state.error=null
        })
        builder.addCase(finduser.rejected,(state,{payload})=>{
            state.status="failed"
            state.error=action.error
        })
    }
})
export const getuserSelector =  (state)=>state.getoneuser
export default finduserSlice.reducer
