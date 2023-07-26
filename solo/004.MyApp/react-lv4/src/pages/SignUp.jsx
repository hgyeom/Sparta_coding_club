import React from "react";
import SignupPage from "../components/SignUp/SignUp";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function SignUp() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  if (isLogin) {
    return <Navigate to="/" />;
  }
  return <SignupPage />;
}

export default SignUp;
