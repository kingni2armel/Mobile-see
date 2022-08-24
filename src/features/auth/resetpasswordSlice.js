import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { resetPassword } from "../../api/auth";

const initialState = {
    status:"idle",
    data:[],
    error:null
}
export const reset_password =  createAsyncThunk("reset",resetPassword)
const resetpasswordSlice = createSlice({
    name:"reset",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(reset_password.pending,(state,{payload})=>{
            state.status="loading"
        })
        builder.addCase(reset_password.fulfilled,(state,{payload})=>{
            state.status="succeeded"
            state.data=payload.data
            state.error=null
        })
        builder.addCase(reset_password.rejected,(state,{payload})=>{
            state.status="failed"
            state.error=action.error
        })
    }
})
export const resetpasswordSelector = (state)=>state.resetpasswords
export default resetpasswordSlice.reducer