import { useState, useRef } from "react";
import "./App.css";

const style = {
  border: "1px solid black",
  margin: "10px",
  padding: "10px",
};

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const statePlusButtonHandler = () => {
    setCount(count + 1);
  };

  const refPlusButtonHandler = () => {
    countRef.current++;
    console.log(countRef.current);
  };

  return (
    <>
      <div style={style}>
        state 영역 {count} <br />
        <button onClick={statePlusButtonHandler}>state 증가</button>
      </div>
      <div style={style}>
        ref 영역 {countRef.current} <br />
        <button onClick={refPlusButtonHandler}>ref 증가</button>
      </div>
    </>
  );
}

export default App;
