import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { update } from "../../api/auth";
const initialState = {
    status: "idle",
    data: {},
    error: null,
  };
export const  update_user =  createAsyncThunk('updateuser',update)
const  updateSlice = createSlice({
    name:"updateuser",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(update_user.pending,(state,{payload})=>{
            state.status= "loanding"
        })
        builder.addCase(update_user.fulfilled,(state,{payload})=>{
            state.status="succeeded"
            state.data=payload.data
            state.error=null
        })
        builder.addCase(update_user.rejected,(state,{payload})=>{
            state.status="failed"
            state.error=action.error
        })
    }
})
export const updateuserSelector =  (state)=>state.updateusers
export default updateSlice.reducer
