import React from "react";
import * as S from "./Styled.Write";
import Button from "../Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { useMutation, useQueryClient } from "react-query";
import { updatePost } from "../../api/posts";
function Modify() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { state } = useLocation();

  let [writer, onChangeWriterHandler] = useInput("");
  let [title, onChangeTitleHandler] = useInput("");
  let [contents, onChangeContentsHandler] = useInput("");

  const mutation = useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
      queryClient.invalidateQueries("post");
    },
  });

  const onClickUpdateButtonHandler = (e) => {
    if (!writer && !title && !contents) {
      alert("수정사항이 없습니다.");
      return;
    }

    const checkPassword = prompt("비밀번호를 입력해주세요.");
    if (checkPassword === state.password) {
      if (!writer) {
        writer = state.writer;
      }
      if (!title) {
        title = state.title;
      }
      if (!contents) {
        contents = state.contents;
      }

      const updatePost = {
        id: state.id,
        writer,
        title,
        contents,
      };

      mutation.mutate(updatePost);
      navigate(`/${state.id}`);
    } else if (checkPassword !== null) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    } else {
      return;
    }
  };

  return (
    <S.StForm onSubmit={(e) => e.preventDefault()}>
      <S.StPostContainer>
        <S.StDiv>작성자</S.StDiv>
        <S.StInput
          type="text"
          placeholder={state.writer}
          value={writer}
          onChange={onChangeWriterHandler}
        />
        <S.StDiv>제목</S.StDiv>
        <S.StInput
          type="text"
          placeholder={state.title}
          value={title}
          onChange={onChangeTitleHandler}
        />
        <S.StDiv>내용</S.StDiv>
        <S.StTextArea
          placeholder={state.contents}
          value={contents || ""}
          onChange={onChangeContentsHandler}
        ></S.StTextArea>

        <S.StButtonArea>
          <Button
            background_color="white"
            border="1px solid #cccccc"
            width="60px"
            height="30px"
            onClick={onClickUpdateButtonHandler}
          >
            등록
          </Button>
          <Button
            background_color="white"
            border="1px solid #cccccc"
            width="60px"
            height="30px"
            onClick={() => {
              navigate("/");
            }}
          >
            취소
          </Button>
        </S.StButtonArea>
      </S.StPostContainer>
    </S.StForm>
  );
}

export default Modify;
