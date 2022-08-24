import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { createAnnoucement } from "../../api/annoucement";

const initialState = {
    status:"idle",
    data:[],
    error:null
}
export const create_announcement =  createAsyncThunk("createA",createAnnoucement)
const createannoucementSlice =  createSlice({
    name:"createA",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(create_announcement.pending,(state, {payload})=>{
            state.status="loanding"
        }) 
        builder.addCase(create_announcement.fulfilled,(state,{payload})=>{
            state.status="succeeded"
            state.data=payload.data
            state.error=null
        })
        builder.addCase(create_announcement.rejected,(state, {payload})=>{
            state.status="failed"
            state.error=action.error
        })
    }
})
export const createannoucementSelector  = (state)=>state.createannoucements
export default createannoucementSlice.reducer