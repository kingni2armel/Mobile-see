import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { deleteFlightproposal } from "../../api/flightproposal";

const initialState = {
    status:"idle",
    data:[],
    error:null
}
export const delete_filghproposal =  createAsyncThunk("udpateA",deleteFlightproposal)
const deleteFligthproposalSlice =  createSlice({
    name:"udpateA",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(delete_filghproposal.pending,(state, {payload})=>{
            state.status="loanding"
        }) 
        builder.addCase(delete_filghproposal.fulfilled,(state,{payload})=>{
            state.status="succeeded"
            state.data=payload.data
            state.error=null
        })
        builder.addCase(delete_filghproposal.rejected,(state, {payload})=>{
            state.status="failed"
            state.error=action.error
        })
    }
})
export const deleteflightSelector  = (state)=>state.deleteflightproposals
export default deleteFligthproposalSlice.reducer