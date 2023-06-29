import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTodo, removeTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onChangeButtonClick = (id) => {
    dispatch(changeTodo(id));
  };

  const onRemoveButtonClick = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <h1>Working</h1>
      {todos
        .filter((todo) => !todo.isDone)
        .map((todo) => {
          return (
            <div
              key={todo.todoId}
              style={{
                border: "solid 1px black",
                margin: "10px",
                padding: "5px",
              }}
            >
              {todo.todoId}
              <br />
              제목 : {todo.title}
              <br />
              내용 : {todo.body}
              <br />
              {todo.isDone.toString()}
              <div>
                <button onClick={() => onChangeButtonClick(todo.todoId)}>
                  완료
                </button>
                <button onClick={() => onRemoveButtonClick(todo.todoId)}>
                  삭제
                </button>
              </div>
              <Link to={`/detail/${todo.todoId}`}>상세페이지</Link>
            </div>
          );
        })}
      <h1>Done</h1>
      {todos
        .filter((todo) => todo.isDone)
        .map((todo) => {
          return (
            <div
              key={todo.todoId}
              style={{
                border: "solid 1px black",
                margin: "10px",
                padding: "5px",
              }}
            >
              {todo.todoId}
              <br />
              제목 : {todo.title}
              <br />
              내용 : {todo.body}
              <br />
              {todo.isDone.toString()}
              <div>
                <button onClick={() => onChangeButtonClick(todo.todoId)}>
                  취소
                </button>
                <button onClick={() => onRemoveButtonClick(todo.todoId)}>
                  삭제
                </button>
              </div>
              <Link to={`/detail/${todo.todoId}`}>상세페이지</Link>
            </div>
          );
        })}
    </div>
  );
}

export default Todo;
