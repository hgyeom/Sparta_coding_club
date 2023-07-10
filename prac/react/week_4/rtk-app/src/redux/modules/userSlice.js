import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

const initialState = [
  {
    id: shortid.generate(),
    email: "aaa@aaa.com",
    password: "1234",
    userName: "가나다",
    isLogin: false,
  },
];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      return state.map((user) => {
        if (
          user.email === action.payload.email &&
          user.password === action.payload.password
        ) {
          return {
            ...user,
            isLogin: !user.isLogin,
          };
        } else {
          return user;
        }
      });
    },
    join: (state, action) => {
      const newUser = {
        id: shortid.generate(),
        email: action.payload.email,
        password: action.payload.password,
        userName: action.payload.userName,
        isLogin: false,
      };
      state.push(newUser);
    },
    logout: (state, action) => {
      return state.map((user) => {
        return user.id === action.payload
          ? { ...user, isLogin: !user.isLogin }
          : user;
      });
    },
  },
});

export const { login, join, logout } = userSlice.actions;
export default userSlice.reducer;
