import React, { useState, useMemo } from "react";

function HeavyComponent() {
  const [count, setCount] = useState(0);

  const heavyWork = () => {
    for (let i = 0; i < 1000000000; i++) {}
    return 100;
  };

  const value = useMemo(() => heavyWork(), []);
  console.log(`value는 ${value}입니다.`);

  return (
    <>
      <p>난 무겁다고</p>
      <button onClick={() => setCount(count + 1)}>
        누르면 count가 올라가요
      </button>
      <br />
      {count}
    </>
  );
}

export default HeavyComponent;
