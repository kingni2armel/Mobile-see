import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getallAlert } from "../../api/alert";

const initialState = {
  status: "idle",
  data: {},
  error: null,
};

export const get_all_alert = createAsyncThunk("Allalert",getallAlert);
const getallalertSlice = createSlice({
  name: "Allalert",
  initialState,
  reducers: {} ,
  extraReducers(builder) {
    builder.addCase(get_all_alert.pending, (state, { payload }) => {
        state.status = "loading";
      })
    builder.addCase(get_all_alert.fulfilled, (state, { payload }) => {
        state.status = "succeeded"
        state.data=payload.data
        state.error=null
      })  
    builder.addCase(get_all_alert.rejected, (state, { payload }) => {
        state.status = "failed";
      })
  },
});
export const allalerteSelector = (state) => state.allalerts;
export default getallalertSlice.reducer;
