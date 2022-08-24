import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { getAllAnnoucement } from "../../api/annoucement";

const initialState = {
    status:"idle",
    data:[],
    error:null
}
export const get_all_announcement =  createAsyncThunk("getallA",getAllAnnoucement)
const getallannouncementSlice =  createSlice({
    name:"getallA",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(get_all_announcement.pending,(state, {payload})=>{
            state.status="loanding"
        }) 
        builder.addCase(get_all_announcement.fulfilled,(state,{payload})=>{
            state.status="succeeded"
            state.data=payload.data
            state.error=null
        })
        builder.addCase(get_all_announcement.rejected,(state, {payload})=>{
            state.status="failed"
            state.error=action.error
        })
    }
})
export const getallannouncementSelector  = (state)=>state.getallannouncements
export default getallannouncementSlice.reducer