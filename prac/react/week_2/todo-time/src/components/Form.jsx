import React from "react";
import { useState } from "react";
import uuid from "react-uuid";

const formStyle = {
  backgroundColor: "#abb6ff",
  display: "flex",
  height: "70px",
  borderBottom: "1px solid #9100d9",
  alignItems: "center",
};

const inputStyle = {
  marginLeft: "10px",
  marginRight: "10px",
};

function Form({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <div style={formStyle}>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const newTodo = {
            id: uuid(),
            title,
            contents,
            isDone: false,
          };

          setTodos([...todos, newTodo]);
          setTitle("");
          setContents("");
        }}
      >
        제목
        <input
          style={inputStyle}
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        내용
        <input
          style={inputStyle}
          type="text"
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
        />
        <button style={inputStyle}>추가하기</button>
      </form>
    </div>
  );
}

export default Form;
