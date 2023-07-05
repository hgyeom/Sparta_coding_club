// import { createStore } from "redux";
// import { combineReducers } from "redux";
// 1. create rootReducer with reducers
// const rootReducer = combineReducers({
//   todos,
// });

// 2. create store
// const store = createStore(rootReducer);

import todos from "../modules/todos";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { todos },
});

// 3. export
export default store;
