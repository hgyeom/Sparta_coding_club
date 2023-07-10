import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { addPost } from "../redux/modules/boardSlice";

function Write() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const writerId = location.state.userId;
  const onClickWriteButtonHandler = () => {
    dispatch(
      addPost({
        writerId,
        title,
        contents,
      })
    );
    navigate("/");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onClickWriteButtonHandler();
      }}
    >
      <h4>글 작성</h4>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="내용"
        value={contents}
        onChange={(e) => {
          setContents(e.target.value);
        }}
      />
      <br />
      <button>작성</button>
    </form>
  );
}

export default Write;
