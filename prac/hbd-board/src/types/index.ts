type BoardType = {
  email: string;
  contents: string;
  isDeleted: boolean;
  id?: number;
};

type CommentType = {
  boardId: number;
  comments: string;
  email: string;
  isDeleted: boolean;
  id: number;
};

export type { BoardType, CommentType };
