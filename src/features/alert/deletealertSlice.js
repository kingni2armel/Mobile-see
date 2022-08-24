import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteAlert } from "../../api/alert";

const initialState = {
  status: "idle",
  data: {},
  error: null,
};

export const delete_alert = createAsyncThunk("Dalert",deleteAlert);
const deletealertSlice = createSlice({
  name: "Dalert",
  initialState,
  reducers: {} ,
  extraReducers(builder) {
    builder.addCase(delete_alert.pending, (state, { payload }) => {
        state.status = "loading";
      })
    builder.addCase(delete_alert.fulfilled, (state, { payload }) => {
        state.status = "succeeded"
        state.data=payload.data
        state.error=null
      })  
    builder.addCase(delete_alert.rejected, (state, { payload }) => {
        state.status = "failed";
      })
  },
});
export const deletealerteSelector = (state) => state.deletealerts;
export default deletealertSlice.reducer;
