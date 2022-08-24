import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { updateFlightproposal } from "../../api/flightproposal";

const initialState = {
    status:"idle",
    data:[],
    error:null
}
export const update_flightproposal = createAsyncThunk('updateFlight',updateFlightproposal)
const updateflightproposalSlice = createSlice({
    name:"updateFlight",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(update_flightproposal.pending,(state, {payload})=>{
            state.status="loading"
        })
        builder.addCase(update_flightproposal.fulfilled,(state, {payload})=>{
            state.status="succeeded"
            state.data=payload.data
            state.error=null
        })
        builder.addCase(update_flightproposal.rejected,(state,{payload})=>{
            state.status="rejected"
            state.error=action.error
        })
    }
})
export const updateflightSelector = (state)=>state.updateflightproposals
export default updateflightproposalSlice.reducer