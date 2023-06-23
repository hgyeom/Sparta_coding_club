import React from "react";
import FlexDiv from "./FlexDiv";

function Select() {
  return (
    <div
      style={{
        height: "150px",
        border: "1px solid grey",
        overflow: "hidden",
      }}
    >
      <h1>Select</h1>
      <FlexDiv></FlexDiv>
      <select>
        <option>리액트</option>
        <option>자바</option>
        <option>스프링</option>
        <option>리액트네이티브</option>
      </select>
      <select>
        <option>리액트</option>
        <option>자바</option>
        <option>스프링</option>
        <option>리액트네이티브</option>
      </select>
    </div>
  );
}

export default Select;
