import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

const headerStyle = {
  backgroundColor: "#fae3a5",
};
const mainStyle = {
  backgroundColor: "#dea5fa",
  height: "100vh",
};

function App() {
  const initialState = [
    {
      id: uuid(),
      title: "1번",
      contents: "1번",
      isDone: false,
    },
    {
      id: uuid(),
      title: "2번",
      contents: "2번",
      isDone: false,
    },
    {
      id: uuid(),
      title: "3번",
      contents: "3번",
      isDone: true,
    },
  ];

  const [todos, setTodos] = useState(initialState);

  return (
    <>
      <header style={headerStyle}>TodoList</header>
      <main style={mainStyle}>
        <Form todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} isDone={false} />
        <TodoList todos={todos} setTodos={setTodos} isDone={true} />
      </main>
    </>
  );
}

export default App;
