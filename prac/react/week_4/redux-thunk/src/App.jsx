import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { __minusNumber, __addNumber } from "./redux/modules/counterSlice";

function App() {
  const globalNumber = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  const [number, setNumber] = useState(0);

  const onClickAddNumberHandler = () => {
    // dispatch(addNumber(+number));
    dispatch(__addNumber(+number));
  };

  const onClickMinusNumberHandler = () => {
    // dispatch(minusNumber(+number));
    dispatch(__minusNumber(+number));
  };

  return (
    <div>
      <div>{globalNumber}</div>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      <button onClick={onClickAddNumberHandler}>+</button>
      <button onClick={onClickMinusNumberHandler}>-</button>
    </div>
  );
}

export default App;
