import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "redux/modules/theme";
import { styled } from "styled-components";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const onClickThemeToggle = () => {
    dispatch(changeTheme(theme));
  };
  return (
    <StThemeToggleContainer onClick={onClickThemeToggle}>
      다크모드
    </StThemeToggleContainer>
  );
};

export default ThemeToggle;

const StThemeToggleContainer = styled.div``;
