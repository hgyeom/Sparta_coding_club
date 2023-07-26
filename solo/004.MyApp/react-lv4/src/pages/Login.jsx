import React from "react";
import LoginPage from "../components/Login/Login";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Login() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  if (isLogin) {
    return <Navigate to="/" />;
  }

  return <LoginPage />;
}

export default Login;
