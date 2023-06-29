const ADD_TODO = "ADD_TODO";
const CHANGE_TODO = "CHANGE_TODO";
const REMOVE_TODO = "REMOVE_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const changeTodo = (payload) => {
  return {
    type: CHANGE_TODO,
    payload,
  };
};

export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case CHANGE_TODO:
      return state.map((item) => {
        if (item.todoId === action.payload) {
          item.isDone = !item.isDone;
          return item;
        } else {
          return item;
        }
      });
    case REMOVE_TODO:
      return state.filter((item) => item.todoId !== action.payload);
    default:
      return state;
  }
};
export default todos;
