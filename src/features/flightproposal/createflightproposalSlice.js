import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { createFligthproposal } from "../../api/flightproposal";
const initialState = {
    status:"idle",
    data:[],
    error:null
}
export const create_filghproposal =  createAsyncThunk("udpateA",createFligthproposal)
const createFligthproposalSlice =  createSlice({
    name:"udpateA",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(create_filghproposal.pending,(state, {payload})=>{
            state.status="loanding"
        }) 
        builder.addCase(create_filghproposal.fulfilled,(state,{payload})=>{
            state.status="succeeded"
            state.data=payload.data
            state.error=null
        })
        builder.addCase(create_filghproposal.rejected,(state, {payload})=>{
            state.status="failed"
            state.error=action.error
        })
    }
})
export const createflightSelector  = (state)=>state.createflightproposals
export default createFligthproposalSlice.reducer