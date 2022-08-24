import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { getallFlightproposal } from "../../api/flightproposal";

const initialState = {
    status:"idle",
    data:[],
    error:null
}
export const get_all_flightproposal =createAsyncThunk('getallfligh',getallFlightproposal)
const getallflightproposalSlice =  createSlice({
    name:"getallfligh",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(get_all_flightproposal.pending,(state, {payload})=>{
            state.status = "loading"
        })
        builder.addCase(get_all_flightproposal.fulfilled,(state, {payload})=>{
            state.status="succeeded"
            state.data=payload.data
            state.error=null
        })
        builder.addCase(get_all_flightproposal.rejected,(state, {payload})=>{
            state.status="failed"
            state.error = action.error
        })
    }
})
export const getallflightSelector = (state)=>state.getallFlightproposals
export default getallflightproposalSlice.reducer