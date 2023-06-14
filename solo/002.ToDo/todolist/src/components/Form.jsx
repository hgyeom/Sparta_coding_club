import { useState } from "react";

const Form = ({ todoList, setTodoList }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // title 변경
  const onTitleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  // body 변경
  const onBodyChangeHandler = (e) => {
    setBody(e.target.value);
  };

  // set todolist
  const onAddHandler = (e) => {
    e.preventDefault();
    const todo = {
      id: todoList.length + 1,
      title,
      body,
      isDone: false,
    };
    setTodoList([...todoList, todo]);
  };

  return (
    <form>
      <div className="form-input">
        <label>제목</label>
        <input
          type="text"
          className="add-input"
          value={title}
          onChange={onTitleChangeHandler}
        />
        <label>내용</label>
        <input
          type="text"
          className="add-input"
          value={body}
          onChange={onBodyChangeHandler}
        />
      </div>
      <button onClick={onAddHandler}>추가하기</button>
    </form>
  );
};

export default Form;
