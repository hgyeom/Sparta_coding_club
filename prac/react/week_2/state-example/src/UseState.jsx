import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <div>number = {number}</div>
      <button
        onClick={setNumber(number + 1)}
        // onClick={() => {
        //   setNumber((number) => number + 1);
        // }}
      >
        UP
      </button>
    </>
  );
}

export default App;
