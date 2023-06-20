import React from "react";

const style = {
  width: "100px",
  height: "100px",
  backgroundColor: "#01c49f",
  color: "white",
};

function Box1({ initCount }) {
  console.log("Box1컴포넌트 렌더링");
  return (
    <div style={style}>
      <button onClick={initCount}>초기화</button>
    </div>
  );
}

export default React.memo(Box1);
