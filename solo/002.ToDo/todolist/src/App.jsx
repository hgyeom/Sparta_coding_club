import Todo from "components/Todo";
import Form from "components/Form";
import { useState } from "react";
import "App.css";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "리액트", body: "리액트 과제 끝내기", isDone: true },
    { id: 2, title: "리액트", body: "리액트 강의 다시보기", isDone: false },
    {
      id: 3,
      title: "오버워치",
      body: "50판 채워서 랭커딱지 달기",
      isDone: false,
    },
  ]);

  const onRemoveHandler = (id) => {
    const filterdTodo = todoList.filter((todo) => todo.id !== id);
    setTodoList(filterdTodo);
  };

  const onChangeHandler = (id) => {
    const changeTodo = todoList.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
        return todo;
      } else {
        return todo;
      }
    });
    setTodoList([...changeTodo]);
  };

  return (
    <div className="layout">
      <header className="app-header">
        <h1>My Todo List</h1>
      </header>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <Todo
        todoList={todoList}
        setTodoList={setTodoList}
        onRemoveHandler={onRemoveHandler}
        onChangeHandler={onChangeHandler}
      />
    </div>
  );
}

export default App;
