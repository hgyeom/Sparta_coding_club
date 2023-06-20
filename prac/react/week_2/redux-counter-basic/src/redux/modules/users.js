// 초기 상태값 필요(state)
const initialState = {
  user: "kim",
};

// 리듀서 : state의 변화를 일으키는 함수
// state를 action의 type에 따라 변경하는 함수

// input : state, action
const users = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default users;
