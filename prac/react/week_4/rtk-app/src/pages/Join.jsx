import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { join } from "../redux/modules/userSlice";

function Join() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [userName, setUserName] = useState("");
  return (
    <div>
      <h1>Join</h1>
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
      <input
        type="password"
        placeholder="비밀번호 확인"
        value={confPassword}
        onChange={(e) => setConfPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="유저명"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        onClick={() => {
          if (password !== confPassword) {
            alert("비밀번호가 다릅니다.");
            return false;
          }
          dispatch(
            join({
              email,
              password,
              userName,
            })
          );
          alert("가입 완료");
          navigate("/");
        }}
      >
        회원가입
      </button>
    </div>
  );
}

export default Join;
