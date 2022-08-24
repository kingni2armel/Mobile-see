import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateAlert } from "../../api/alert";

const initialState = {
    status:"idle",
    data:[],
    error:null
}
export const update_alert = createAsyncThunk("Ualert",updateAlert);
const updatealertSlice = createSlice({
  name: "Ualert",
  initialState,
  reducers: {} ,
  extraReducers(builder) {
    builder.addCase(update_alert.pending, (state, { payload }) => {
        state.status = "loading";
      })
    builder.addCase(update_alert.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.data=payload.data
        state.error=null
      })  
    builder.addCase(update_alert.rejected, (state, { payload }) => {
        state.status = "failed";
      })
  },
});
export const updatealerteSelector = (state) => state.updatealerts;
export default updatealertSlice.reducer;
