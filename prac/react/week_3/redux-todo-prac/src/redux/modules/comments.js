const ADD_COMMENT = "ADD_COMMENT";
const REMOVE_COMMENT = "REMOVE_COMMENT";

export const addComment = (payload) => {
  return {
    type: ADD_COMMENT,
    payload,
  };
};

export const removeComment = (payload) => {
  return {
    type: REMOVE_COMMENT,
    payload,
  };
};

const initialState = [];

const comments = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      console.log(action.payload);
      return [...state, action.payload];
    case REMOVE_COMMENT:
      console.log(action.payload);
      return state.filter((item) => item.commentId !== action.payload);
    default:
      return state;
  }
};

export default comments;
