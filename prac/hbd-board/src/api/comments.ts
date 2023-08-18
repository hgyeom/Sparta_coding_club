import axios from "axios";
import { CommentType } from "../types";

export const getAllComments = async () => {
  const response = await axios.get(
    `http://localhost:4000/comments?isDeleted=${false}`
  );
  return response.data;
};

export const getComments = async (boardId: number) => {
  const response = await axios.get(
    `http://localhost:4000/comments?isDeleted=${false}&boardId=${boardId}`
  );
  return response.data;
};

export const addComment = async (comment: CommentType) => {
  await axios.post(`http://localhost:4000/comments`, {
    boardId: comment.boardId,
    comments: comment.comments,
    email: comment.email,
    isDeleted: false,
  });
};

export const deleteComment = async (id: number) => {
  await axios.patch(`http://localhost:4000/comments/${id}`, {
    isDeleted: true,
  });
};
