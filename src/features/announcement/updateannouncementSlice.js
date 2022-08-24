import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { updateAnnoucement } from "../../api/annoucement";

const initialState = {
    status:"idle",
    data:[],
    error:null
}
export const update_announcement =  createAsyncThunk("udpateA",updateAnnoucement)
const updateannoucementSlice =  createSlice({
    name:"udpateA",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(update_announcement.pending,(state, {payload})=>{
            state.status="loanding"
        }) 
        builder.addCase(update_announcement.fulfilled,(state,{payload})=>{
            state.status="succeeded"
            state.data=payload.data
            state.error=null
        })
        builder.addCase(update_announcement.rejected,(state, {payload})=>{
            state.status="failed"
            state.error=action.error
        })
    }
})
export const updateannoucementSelector  = (state)=>state.updateannoucements
export default updateannoucementSlice.reducer