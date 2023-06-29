import { createStore, combineReducers } from "redux";
import todos from "../modules/todos";
import comments from "../modules/comments";
const rootReducer = combineReducers({ todos, comments });
const store = createStore(rootReducer);

export default store;
