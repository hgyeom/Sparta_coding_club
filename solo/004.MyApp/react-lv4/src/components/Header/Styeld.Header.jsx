import styled from "styled-components";
import { Link } from "react-router-dom";
export const StHeader = styled.header`
  padding: 10px;
  font-size: 40px;
  font-weight: 600;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dddddd;
`;

export const StLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const StBtnContainer = styled.div`
  display: flex;
  gap: 10px;
`;
