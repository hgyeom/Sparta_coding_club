import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import shortId from "shortid";
function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();

  return (
    <form
      style={{
        marginTop: "5px",
        borderBottom: "1px solid black",
        height: "30px",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        if (!title || !body) {
          alert("제목 또는 내용을 입력해주세요");
        } else {
          dispatch(
            addTodo({
              todoId: shortId.generate(),
              title,
              body,
              isDone: false,
            })
          );
          setTitle("");
          setBody("");
        }
      }}
    >
      제목 :
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      내용 :
      <input
        type="text"
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <button>추가하기</button>
    </form>
  );
}

export default Form;
