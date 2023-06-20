import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import Box1 from "./useCallback/Box1";
import Box2 from "./useCallback/Box2";
import Box3 from "./useCallback/Box3";

function App() {
  console.log("App컴포넌트 렌더링");
  const [count, setCount] = useState(0);

  // count 증가
  const onPlusButtonClickHandler = () => {
    setCount(count + 1);
  };

  // count 감소
  const onMinusButtonClickHandler = () => {
    setCount(count - 1);
  };

  // count 초기화
  const initCount = useCallback(() => {
    console.log(`${count}에서 0으로 변경되었습니다.`);
    setCount(0);
  }, [count]);

  return (
    <>
      <h3>React.Memo 카운트 예제</h3>
      <p>현재 카운트 : {count}</p>
      <button onClick={onPlusButtonClickHandler}>+</button>
      <button onClick={onMinusButtonClickHandler}>-</button>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <Box1 initCount={initCount} />
        <Box2 />
        <Box3 />
      </div>
    </>
  );
}

export default App;
