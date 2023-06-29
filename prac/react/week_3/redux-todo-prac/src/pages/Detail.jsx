import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { addComment, removeComment } from "../redux/modules/comments";
import shortid from "shortid";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todo = useSelector((state) => state.todos).filter(
    (todo) => todo.todoId === id
  )[0];

  const comments = useSelector((state) => state.comments).filter(
    (comment) => comment.todoId === id
  );

  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const onClickRemoveCommentButton = (id) => {
    dispatch(removeComment(id));
  };

  return (
    <div>
      <StyledTodoBox>
        id : {todo.todoId}
        <br />
        제목 : {todo.title}
        <br />
        내용 : {todo.body}
        <br />
        isDone : {todo.isDone.toString()}
        <br />
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          이전
        </button>
      </StyledTodoBox>
      <StyledCommentsBox>
        <h3>댓글</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!name || !body) {
              alert("이름이나 내용을 입력해주세요. ");
            } else {
              dispatch(
                addComment({
                  commentId: shortid.generate(),
                  todoId: id,
                  name,
                  body,
                })
              );
            }
          }}
        >
          이름 :
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          내용 :
          <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button>등록</button>
        </form>
        {comments.map((comment) => {
          return (
            <StyledCommentBox key={comment.commentId}>
              {comment.commentId}
              <br />
              이름 : {comment.name}
              <br />
              내용 : {comment.body}
              <br />
              내용 : {comment.body}
              <br />
              {/* <button onClick={() => onClickRemoveCommentButton(comment.commentId)}>수정</button> */}
              <button
                onClick={() => onClickRemoveCommentButton(comment.commentId)}
              >
                삭제
              </button>
            </StyledCommentBox>
          );
        })}
      </StyledCommentsBox>
    </div>
  );
}

export default Detail;

const StyledTodoBox = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;

const StyledCommentsBox = styled.div``;
const StyledCommentBox = styled.div`
  border: 1px solid black;
  padding: 5px;
  margin: 5px;
`;
