import { api } from "../../config";
import { findAlert } from "../../api/alert";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:"idle",
    data:[],
    error:null
}
export const find_alert = createAsyncThunk('Falert',findAlert)
const getonealertSlice  = createSlice({
    name:"Falert",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(find_alert.pending,(state, { payload })=>{
                state.status="loading"
        })
        builder.addCase(find_alert.fulfilled,(state, { payload })=>{
            state.status="succeeded"
            state.data=payload.data
            state.error=null
        })
        builder.addCase(find_alert.rejected,(state, { payload })=>{
            state.status="failed"
            state.error=action.error
        })
    }
})
export const getonealertSelector = (state)=>state.getonealerts
export default getonealertSlice.reducer