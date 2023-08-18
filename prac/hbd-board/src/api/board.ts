import axios from "axios";
import { BoardType } from "../types";

export const getBoards = async () => {
  const response = await axios.get(
    `http://localhost:4000/boards?isDeleted=${false}`
  );
  return response.data;
};

export const addBoard = async (board: BoardType) => {
  await axios.post(`http://localhost:4000/boards`, {
    email: board.email,
    contents: board.contents,
    isDeleted: false,
  });
};

export const deleteBoard = async (id: number) => {
  await axios.patch(`http://localhost:4000/boards/${id}`, {
    isDeleted: true,
  });
};
