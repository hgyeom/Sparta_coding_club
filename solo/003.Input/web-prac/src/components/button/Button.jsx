import React from "react";
import { styled, css } from "styled-components";

const SizeStyles = css`
  ${(props) =>
    props.size === "large" &&
    css`
      width: 250px;
      height: 50px;
      font-weight: bold;
      background: white;
      border: 2px solid ${props.color};
    `}
  ${(props) =>
    props.size === "medium" &&
    css`
      width: 100px;
      height: 40px;
      background: ${(props) => props.color};
      border: none;
    `}
    ${(props) =>
    props.size === "small" &&
    css`
      width: 70px;
      height: 30px;
      background: ${(props) => props.color};
      border: none;
    `}
`;

const StyledButton = styled.button`
  outline: none;
  /* border: none; */
  border-radius: 4px;
  color: black;
  cursor: pointer;
  margin-left: 10px;
  margin-top: 0px;
  /* 크기별 */
  ${SizeStyles}

  &:active {
    background: #0000005a;
  }
`;

const onCilckHandler = (click) => {
  switch (click) {
    case "alert":
      alert("만들긴 했습니다");
      break;
    case "prompt":
      prompt("어렵습니다", "");
      break;
    default:
      break;
  }
};
function Button({ size, click, color, children }) {
  return (
    <StyledButton
      size={size}
      color={color}
      onClick={() => onCilckHandler(click)}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
