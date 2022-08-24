import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { deleteAnnoucement } from "../../api/annoucement";

const initialState = {
    status:"idle",
    data:[],
    error:null
}
export const delete_announcement =  createAsyncThunk("deleteA",deleteAnnoucement)
const deleteannoucementSlice =  createSlice({
    name:"deleteA",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(delete_announcement.pending,(state, {payload})=>{
            state.status="loanding"
        }) 
        builder.addCase(delete_announcement.fulfilled,(state,{payload})=>{
            state.status="succeeded"
            state.data=payload.data
            state.error=null
        })
        builder.addCase(delete_announcement.rejected,(state, {payload})=>{
            state.status="failed"
            state.error=action.error
        })
    }
})
export const deleteannoucementSelector  = (state)=>state.deleteannoucements
export default deleteannoucementSlice.reducer