import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(`hello, ${value}`);

    return () => {
      console.log(`뿅`);
    };
  }, [value]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
