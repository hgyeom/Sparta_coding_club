import React from "react";
import ModifyPage from "../components/Form/Modify";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function Modify() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return <ModifyPage />;
}

export default Modify;
