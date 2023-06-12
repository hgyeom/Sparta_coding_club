import React from "react";

function Son() {
  return <div>저는 아들입니다.</div>;
}

function Mother() {
  return <Son />;
}

function GrandFather() {
  return <Mother />;
}

// 부모 컴포넌트
function App() {
  return <GrandFather />;
}

export default App;
