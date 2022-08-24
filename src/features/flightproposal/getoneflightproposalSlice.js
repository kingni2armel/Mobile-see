import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { findFlightproposal } from "../../api/flightproposal"

const initialState = {
    status:"idle",
    data:[],
    error:null
}
export const search_flightproposal =  createAsyncThunk('searchflight',findFlightproposal)
const getoneflightproposalSlice = createSlice({
    name:"searchflight",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(search_flightproposal.pending,(state, {payload})=>{
                state.status="loading"
        })
        builder.addCase(search_flightproposal.fulfilled,(state, {payload})=>{
            state.status="succeeded"
            state.data=payload.data
            state.error=null
        })
        builder.addCase(search_flightproposal.rejected,(state, {payload})=>{
            state.status="failed"
            state.error=action.error
        })
    }
})
export const searchflightSelector=(state)=>state.searchflightproposals
export default getoneflightproposalSlice.reducer