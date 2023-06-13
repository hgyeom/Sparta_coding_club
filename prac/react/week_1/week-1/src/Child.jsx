import React from "react";

function Child({ age, name, children }) {
  console.log("age", age);
  console.log("name", name);
  console.log("children", children);
  return <div>Child</div>;
}

Child.defaultProps = {
  name: "default",
};
export default Child;
