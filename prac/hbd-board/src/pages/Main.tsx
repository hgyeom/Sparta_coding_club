import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";

import type { BoardType, CommentType } from "../types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addBoard, getBoards } from "../api/board";
import { getAllComments } from "../api/comments";

const Main: React.FC<any> = () => {
  // const [data, setData] = useState<BoardType[]>();
  // const [comments, setComments] = useState<CommentType[]>();
  const [contents, setContents] = useState<string>("");

  const {
    data: boards,
    isLoading: isBoardLoading,
    isError: isBoardError,
  } = useQuery<BoardType[]>(["boards"], getBoards);

  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
  } = useQuery<CommentType[]>(["comments"], getAllComments);

  const addBoardMutation = useMutation({
    mutationFn: (input: BoardType) => addBoard(input),
    onSuccess: () => {
      console.log("성공");
    },
  });

  if (isBoardLoading || isCommentsLoading) {
    return <h1>로딩중입니다.</h1>;
  }

  if (isBoardError || isCommentsError) {
    return <h1>오류가 발생했습니다.</h1>;
  }

  const handleBoardSubmit = async (e: any) => {
    e.preventDefault();

    const email = localStorage.getItem("email");
    if (!email) {
      alert("이메일이 없습니다. 확인해주세요.");
      return false;
    }

    addBoardMutation.mutate({
      email,
      contents,
      isDeleted: false,
    });

    alert(
      "등록이 완료되었습니다. 아직 자동 새로고침이 불가하여 수동으로 갱신합니다."
    );
    window.location.reload();
  };

  const handleInputChange = (e: any) => {
    setContents(e.target.value);
  };

  const handleDeleteButtonClick = async (itemId: number) => {
    try {
      await axios.patch(`http://localhost:4000/boards/${itemId}`, {
        isDeleted: true,
      });

      alert(
        "삭제가 완료되었습니다. 아직 자동 새로고침이 불가하여 수동으로 갱신합니다."
      );

      window.location.reload();
    } catch (error) {
      alert("데이터를 삭제하는 데에 오류가 발생하였습니다.");
    }
  };

  return (
    <MainWrapper>
      <h1>메인 리스트 페이지</h1>
      <StyledForm onSubmit={handleBoardSubmit}>
        <StyledInput
          placeholder="방명록을 입력해주세요."
          value={contents}
          onChange={handleInputChange}
        />
      </StyledForm>
      <ListWrapper>
        {boards.map((item, index) => {
          // comments를 분류
          const commentsLength = comments?.filter(
            (comment) => Number(comment.boardId) === item.id
          ).length;

          return (
            <ListItem key={item.id}>
              <span>
                {index + 1}. <Link to={`/${item.id}`}>{item.contents}</Link>(
                {commentsLength})
              </span>
              {item.email === localStorage.getItem("email") && (
                <Button onClick={() => handleDeleteButtonClick(item.id ?? 0)}>
                  삭제
                </Button>
              )}
            </ListItem>
          );
        })}
      </ListWrapper>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListWrapper = styled.div`
  width: 50%;
  padding: 10px;
`;

const ListItem = styled.div`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
`;

const StyledInput = styled(Input)`
  width: 50%;
`;

const StyledForm = styled.form`
  width: 100%;
  text-align: center;
`;
