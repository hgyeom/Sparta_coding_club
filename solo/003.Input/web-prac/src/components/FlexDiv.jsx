import React from "react";
import { styled } from "styled-components";
const FlexedDiv = styled.div`
  display: flex;
`;

function FlexDiv({ children }) {
  return <FlexedDiv>{children}</FlexedDiv>;
}

export default FlexDiv;
