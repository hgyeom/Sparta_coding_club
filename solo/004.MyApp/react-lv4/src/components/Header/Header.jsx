import React from "react";
import * as S from "./Styeld.Header";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/modules/authSlice";

function Header() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 로그아웃 구현하기
  const onLogoutButtonClickHandler = () => {
    dispatch(logout());
  };

  return (
    <S.StHeader>
      <S.StLink to="/">
        <h1>Graffiti</h1>
      </S.StLink>
      {isLogin && (
        <S.StBtnContainer>
          <Button
            height="40px"
            width="80px"
            border_radius="10px"
            border="1px solid #e1e1e1"
            background_color="white"
            onClick={() => navigate("/write")}
          >
            글 작성
          </Button>
          <Button
            height="40px"
            width="80px"
            border_radius="10px"
            border="1px solid #e1e1e1"
            background_color="white"
            onClick={onLogoutButtonClickHandler}
          >
            로그아웃
          </Button>
        </S.StBtnContainer>
      )}
    </S.StHeader>
  );
}

export default Header;
