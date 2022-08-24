import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteuser } from "../../api/auth";

const initialState = {
    status: "idle",
    data: {},
    error: null,
  };
export const  delete_user =  createAsyncThunk('delete',deleteuser)
const  deleteSlice = createSlice({
    name:"delete",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(delete_user.pending,(state,{payload})=>{
            state.status= "loanding"
        })
        builder.addCase(delete_user.fulfilled,(state,{payload})=>{
            state.status="succeeded"
            state.data=payload.data
            state.error=null
        })
        builder.addCase(delete_user.rejected,(state,{payload})=>{
            state.status="failed"
            state.error=action.error
        })
    }
})
export const deleteuserSelector =  (state)=>state.deleteusers
export default deleteSlice.reducer
