import "App.css";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  const onCountPlus = () => {
    setCount(++count);
  };

  const onCountMinus = () => {
    setCount(--count);
  };

  return (
    <div style={{ textAlign: "center" }}>
      {count}
      <br />
      <button onClick={onCountPlus}>+1</button>
      <button onClick={onCountMinus}>-1</button>
    </div>
  );
}

export default App;
