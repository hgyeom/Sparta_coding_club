import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { plusOne, minusOne, plusN, minusN } from "./redux/modules/counter";
// import { PLUS_ONE, MINUS_ONE } from "./redux/modules/counter";

function App() {
  const [inputNum, setInputNum] = useState(0);

  // store에 접근하여 counter의 값을 읽어온다
  // useSelector
  const data = useSelector((state) => {
    return state;
  });

  // dispatch
  const dispatch = useDispatch();
  // console.log("data", data);
  // console.log("counter", data.counter.number);

  return (
    <>
      <div>현재 카운트 : {data.counter.number}</div>
      <div>
        <input
          type="number"
          value={inputNum}
          onChange={(e) => {
            const { value } = e.target;
            setInputNum(+value);
          }}
        />
      </div>
      <button
        onClick={() => {
          // dispatch({ type: PLUS_ONE });
          // dispatch(plusOne());
          dispatch(plusN(inputNum));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          // dispatch({ type: MINUS_ONE });
          // dispatch(minusOne());
          dispatch(minusN(inputNum));
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
