import React, { useState } from "react";
import FlexDiv from "./FlexDiv";
import Button from "./button/Button";
import { styled } from "styled-components";

const StyledInput = styled.input`
  border: 1px solid #333333;
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
  margin: 0px 10px 0px 10px;

  &:focus-within {
    box-shadow: 0 0 0 1px #000;
  }
`;

function Input() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("0");

  const priceOnchangeHanlder = (e) => {
    let result = Number(e.target.value.replaceAll(",", ""));
    setPrice(result.toLocaleString());
  };

  const saveButtonHandler = (e) => {
    e.preventDefault();
    alert(`{ name: ${name}, price: ${price.replaceAll(",", "")} }`);
  };

  return (
    <>
      <h1>Input</h1>
      <FlexDiv>
        <form onSubmit={saveButtonHandler}>
          <label>이름</label>
          <StyledInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></StyledInput>
          <label>가격</label>
          <StyledInput
            type="text"
            value={price}
            onChange={priceOnchangeHanlder}
          ></StyledInput>
          <Button size="medium">저장</Button>
        </form>
      </FlexDiv>
    </>
  );
}

export default Input;
