import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeTodo, changeTodo } from "redux/modules/todo";

const Todo = ({ isDone }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // store 조회
  const todoList = useSelector((state) => state.todos.todos);
  console.log(todoList);
  const removeButtonClickHandler = (id) => {
    dispatch(removeTodo(id));
  };

  const changeButtonClickHandler = (id) => {
    dispatch(changeTodo(id));
  };

  return (
    <div className="todo-container">
      <h2>{isDone ? "Done" : "Working"}</h2>
      <section className="todo-wrapper">
        {todoList
          .filter((item) => item.isDone === isDone)
          .map((todo) => {
            return (
              <div className="card" key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.body}</p>
                <div className="card-button">
                  <button onClick={() => removeButtonClickHandler(todo.id)}>
                    삭제
                  </button>
                  <button onClick={() => changeButtonClickHandler(todo.id)}>
                    {todo.isDone ? "취소" : "완료"}
                  </button>
                </div>
                <p
                  onClick={() => {
                    navigate(`details/${todo.id}`);
                  }}
                >
                  상세보기
                </p>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default Todo;
