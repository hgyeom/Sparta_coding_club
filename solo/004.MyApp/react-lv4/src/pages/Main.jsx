import React from "react";
import BoardList from "../components/BoardList/BoardList";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Main() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return <BoardList />;
}

export default Main;
