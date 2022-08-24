import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAlert } from "../../api/alert";

const initialState = {
  status: "idle",
  data: {},
  error: null,
};

export const create_alert = createAsyncThunk("Aalert",createAlert);
const createalertSlice = createSlice({
  name: "Aalert",
  initialState,
  reducers: {} ,
  extraReducers(builder) {
    builder.addCase(create_alert.pending, (state, { payload }) => {
        state.status = "loading";
      })
    builder.addCase(create_alert.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.data=payload.data
        state.error=null
      })  
    builder.addCase(create_alert.rejected, (state, { payload }) => {
        state.status = "failed";
      })
  },
});
export const createalerteSelector = (state) => state.createalerts;
export default createalertSlice.reducer;
