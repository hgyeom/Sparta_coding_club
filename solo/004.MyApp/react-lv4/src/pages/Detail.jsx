import React from "react";
import BoardDetail from "../components/BoardDetail/BoardDetail";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Detail() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return <BoardDetail />;
}

export default Detail;
