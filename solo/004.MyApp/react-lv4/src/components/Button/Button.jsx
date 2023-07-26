import React from "react";
import { StButton } from "./Styled.Button";

function Button(props) {
  return (
    <div>
      <StButton
        height={props.height}
        width={props.width}
        border_radius={props.border_radius}
        border={props.border}
        background_color={props.background_color}
        onClick={props.onClick}
      >
        {props.children}
      </StButton>
    </div>
  );
}

export default Button;
