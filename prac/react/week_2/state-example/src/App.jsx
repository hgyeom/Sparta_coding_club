import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log(number);
  }, [number]);

  return (
    <>
      <div>number = {number}</div>
      <button
        onClick={() => {
          setNumber((number) => number + 1);
        }}
      >
        UP
      </button>
    </>
  );
}

export default App;
