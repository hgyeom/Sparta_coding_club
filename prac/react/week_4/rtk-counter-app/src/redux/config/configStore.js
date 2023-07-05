// Redux Toolkit / 쉽고 간편하다.
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../modules/counterSlice";

const store = configureStore({
  reducer: { counterSlice },
});

// 일반 Reducer / 구시대 방식
// import { createStore, combineReducers } from "redux";
// import counter from "../modules/counter";
// const rootReducer = combineReducers({ counter });

// const store = createStore(rootReducer);

export default store;
