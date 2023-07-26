import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./Styled.BoardDetail";
import Button from "../Button/Button";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deletePost, getPost } from "../../api/posts";
function BoardDetail() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, isError, data, error } = useQuery(["post", id], () =>
    getPost(id)
  );

  const mutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  const onClickDeleteButtonHandler = () => {
    const checkPassword = prompt("비밀번호를 입력해주세요.");
    if (checkPassword === data.password) {
      mutation.mutate(id);
      navigate("/");
    } else if (checkPassword !== null) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    } else {
      return;
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>에러가 발생했습니다: {error.message}</div>;
  }
  return (
    <S.StDetailContainer>
      <S.StDetailTitle>{data.title}</S.StDetailTitle>
      <S.StDetailWriter>{data.writer}</S.StDetailWriter>
      <S.StDetailContent>{data.contents}</S.StDetailContent>
      <S.StDetailButtonArea>
        <Button
          background_color="white"
          border="1px solid #cccccc"
          width="60px"
          height="30px"
          onClick={() => navigate(`/modify/${id}`, { state: data })}
        >
          수정
        </Button>
        <Button
          background_color="white"
          border="1px solid #cccccc"
          width="60px"
          height="30px"
          onClick={onClickDeleteButtonHandler}
        >
          삭제
        </Button>
      </S.StDetailButtonArea>
    </S.StDetailContainer>
  );
}

export default BoardDetail;
