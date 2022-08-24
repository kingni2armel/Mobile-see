import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { FindAnnoucement } from "../../api/annoucement";

const initialState = {
    status:"idle",
    data:[],
    error:null
}
export const get_one_announcement =  createAsyncThunk("getallA",FindAnnoucement)
const getallannouncementSlice =  createSlice({
    name:"getallA",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(get_one_announcement.pending,(state, {payload})=>{
            state.status="loanding"
        }) 
        builder.addCase(get_one_announcement.fulfilled,(state,{payload})=>{
            state.status="succeeded"
            state.data=payload.data
            state.error=null
        })
        builder.addCase(get_one_announcement.rejected,(state, {payload})=>{
            state.status="failed"
            state.error=action.error
        })
    }
})
export const getallannouncementSelector  = (state)=>state.getoneannouncements
export default getallannouncementSlice.reducer