import Todo from "components/Todo";
import Form from "components/Form";
import Header from "components/Header";
import { useState } from "react";
import "App.css";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "리액트", body: "리액트 과제 끝내기", isDone: true },
    { id: 2, title: "리액트", body: "리액트 강의 다시보기", isDone: false },
    { id: 3, title: "알고리즘", body: "프로그래머스 문제 풀기", isDone: false },
  ]);

  return (
    <div className="layout">
      <Header />
      <Form todoList={todoList} setTodoList={setTodoList} />
      <Todo todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
