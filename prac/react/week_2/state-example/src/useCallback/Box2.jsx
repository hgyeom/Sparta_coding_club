import React from "react";

const style = {
  width: "100px",
  height: "100px",
  backgroundColor: "#4293ed",
  color: "white",
};

function Box2() {
  console.log("Box2컴포넌트 렌더링");
  return <div style={style}>Box2</div>;
}

export default React.memo(Box2);
