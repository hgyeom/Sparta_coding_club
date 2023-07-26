import React from "react";
import * as S from "../Login/Styeld.Login";
import Button from "../Button/Button";
import useInput from "../../hooks/useInput";
import { signup } from "../../api/users";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [id, onIdChange] = useInput();
  const [password, onPasswordChange] = useInput();

  const onSignUpSubmitHandler = async (e) => {
    e.preventDefault();
    if (!id) {
      alert("아이디를 입력해주세요.");
      return;
    }
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const body = {
      id,
      password,
    };

    const response = await signup(body);

    if (response) {
      navigate("/login");
    }
  };

  return (
    <S.StLoginContainer>
      <S.StModalView onClick={(e) => e.stopPropagation()}>
        <div className="desc">
          아이디: &nbsp;
          <input type="text" value={id} onChange={onIdChange} />
          <br />
          비밀번호:&nbsp;
          <input type="password" value={password} onChange={onPasswordChange} />
          <Button
            height="35px"
            width="400px"
            border_radius="5px"
            border="1px solid #e1e1e1"
            background_color="white"
            onClick={(e) => onSignUpSubmitHandler(e, id, password)}
          >
            회원가입 하기
          </Button>
          <Button
            height="35px"
            width="400px"
            border_radius="5px"
            border="1px solid #e1e1e1"
            background_color="white"
            onClick={(e) => {
              e.preventDefault();
              navigate("/login");
            }}
          >
            로그인으로 이동
          </Button>
        </div>
      </S.StModalView>
    </S.StLoginContainer>
  );
};

export default SignUp;
