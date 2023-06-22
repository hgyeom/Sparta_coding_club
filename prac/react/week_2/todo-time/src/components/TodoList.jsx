import React from "react";

const todoStyle = {
  border: "solid 1px black",
  margin: "10px",
  width: "160px",
};

function TodoList({ todos, setTodos, isDone }) {
  const changeButtonClickHandler = (id) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos([...newTodo]);
  };

  const removeButtonClickHandler = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos([...newTodo]);
  };

  return (
    <section>
      <h3>{isDone ? "Done" : "Working"}</h3>
      <div style={{ display: "flex " }}>
        {todos
          .filter((item) => item.isDone === isDone)
          .map((todo) => {
            return (
              <div style={todoStyle} key={todo.id}>
                <p>{todo.title}</p>
                <p>{todo.contents}</p>
                <button onClick={() => changeButtonClickHandler(todo.id)}>
                  {isDone ? "취소" : "완료"}
                </button>
                <button onClick={() => removeButtonClickHandler(todo.id)}>
                  삭제
                </button>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default TodoList;
