import React from "react";

const style = {
  width: "100px",
  height: "100px",
  backgroundColor: "#c491be",
  color: "white",
};

function Box3() {
  console.log("Box3컴포넌트 렌더링");
  return <div style={style}>Box3</div>;
}

export default React.memo(Box3);
