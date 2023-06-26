import shortid from "shortid";

const initialState = [
  {
    reviewId: shortid.generate(),
    todoId: "1",
    body: "댓글 1",
    time: new Date().toLocaleTimeString("ko-kr"),
  },
  {
    reviewId: shortid.generate(),
    todoId: "2",
    body: "댓글 12",
    time: new Date().toLocaleTimeString("ko-kr"),
  },
  {
    reviewId: shortid.generate(),
    todoId: "1",
    body: "댓글 123",
    time: new Date().toLocaleTimeString("ko-kr"),
  },
];

const reviews = (state = initialState, action) => {
  switch (action.type) {
    case "READ_REVIEW":
      return state.filter((review) => review.todoId === action.payload);
    case "ADD_REVIEW":
      return [...state, action.payload];
    case "REMOVE_REVIEW":
      return state.filter((review) => review.reviewId !== action.payload);
    default:
      return state;
  }
};

export default reviews;
