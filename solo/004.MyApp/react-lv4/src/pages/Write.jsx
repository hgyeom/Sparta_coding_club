import React from "react";
import WritePage from "../components/Form/Write";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Write() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return <WritePage />;
}

export default Write;
