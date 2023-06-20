import "./App.css";
import React, { useState, useEffect } from "react";
import Box1 from "./memo/Box1";
import Box2 from "./memo/Box2";
import Box3 from "./memo/Box3";

function App() {
  console.log("App컴포넌트 렌더링");
  const [count, setCount] = useState(0);

  const onPlusButtonClickHandler = () => {
    setCount(count + 1);
  };

  const onMinusButtonClickHandler = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h3>React.Memo 카운트 예제</h3>
      <p>현재 카운트 : {count}</p>
      <button onClick={onPlusButtonClickHandler}>+</button>
      <button onClick={onMinusButtonClickHandler}>-</button>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <Box1 />
        <Box2 />
        <Box3 />
      </div>
    </>
  );
}

export default App;
