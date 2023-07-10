import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/modules/userSlice";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(
            login({
              email,
              password,
            })
          );
          navigate("/");
        }}
      >
        로그인
      </button>
    </div>
  );
}

export default Login;
