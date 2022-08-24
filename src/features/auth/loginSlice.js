import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../api/auth";

const initialState = {
  status: "idle",
  data: {},
  error: null,
};
export const auth = createAsyncThunk("auth/login", login);
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(auth.pending, (state, { payload }) => {
        state.status = "loading";
      })
      .addCase(auth.fulfilled, (state, { payload }) => {
        console.log('auth response', payload)
        if (payload?.error) {
          state.status = "failed";
          state.error = "Email ou mot passe incorrect";
        } else {
          state.status = "succeeded";
          state.data = payload.data;
          state.error = null;
        }
      })
  },
});

export const loginSelector = (state) => state.login;
export default loginSlice.reducer;
