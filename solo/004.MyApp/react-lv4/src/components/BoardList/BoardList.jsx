import React from "react";
import * as S from "./Styled.BoardList";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getPosts } from "../../api/posts";

function BoardList() {
  const navigate = useNavigate();
  const { isLoading, isError, data } = useQuery("posts", getPosts);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>오류 발생</h1>;
  }

  return (
    <S.StBoardContainer>
      <S.StBoardList>
        {data.map((post) => {
          return (
            <S.StBoardItem
              key={post.id}
              onClick={() => navigate(`/${post.id}`)}
            >
              <S.StBoardTitle>{post.title}</S.StBoardTitle>
              <S.StBoardWriter>{post.writer}</S.StBoardWriter>
            </S.StBoardItem>
          );
        })}
      </S.StBoardList>
    </S.StBoardContainer>
  );
}

export default BoardList;
