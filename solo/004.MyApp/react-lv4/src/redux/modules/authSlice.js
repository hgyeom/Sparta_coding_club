import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { user } from "../../api/users";

const initialState = {
  isLogin: false,
};

export const __isAuthenticated = createAsyncThunk(
  "isAuthenticated",
  async (payload, thunkAPI) => {
    try {
      const response = await user();
      return thunkAPI.fulfillWithValue(response);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLogin = true;
      sessionStorage.setItem("jwtToken", action.payload.token);
    },
    logout: (state) => {
      state = initialState;
      sessionStorage.removeItem("jwtToken");
      return state;
    },
  },
  extraReducers: {
    [__isAuthenticated.fulfilled]: (state, action) => {
      if (action.payload) {
        state.isLogin = true;
      } else {
        state.isLogin = false;
      }
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
