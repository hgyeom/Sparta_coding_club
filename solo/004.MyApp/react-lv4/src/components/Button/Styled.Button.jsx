import { styled } from "styled-components";

export const StButton = styled.button`
  cursor: pointer;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.border_radius};
  border: ${(props) => props.border};
  background-color: ${(props) => props.background_color};
`;
