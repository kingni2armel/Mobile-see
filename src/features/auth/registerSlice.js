import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { register } from "../../api/auth";
import { RootState } from "../../app/store";

const initialState = {
  status: "idle",
  data: {},
  error: null,
};

export const signUp = createAsyncThunk("register",register);
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    clearData: (state) => {
      state.status = "idle";
      state.data = {};
      state.error = null;
    },
  },
  extraReducers(builder) {

    builder.addCase(signUp.pending,(state,{payload})=>{
      state.status= "loanding"
  })
  builder.addCase(signUp.fulfilled,(state,{payload})=>{
      state.status="succeeded"
      state.data=payload.data
      state.error=null
  })
  builder.addCase(signUp.rejected,(state,{payload})=>{
      state.status="failed"
      state.error=action.error
  })
  },
});
export const { clearData } = registerSlice.actions;
export const registerSelector = (state) => state.register;
export default registerSlice.reducer;
