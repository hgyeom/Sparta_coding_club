import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import HeavyComponent from "./useMemo/HeavyComponent";
import ObjectComponent from "./useMemo/ObjectComponent";

// heavy work -> 무거운 작업이라는 가정.
function App() {
  return (
    <>
      <nav style={{ backgroundColor: "yellow", marginBottom: "30px" }}>
        네비게이션 바
      </nav>
      {/* <HeavyComponent /> */}
      <ObjectComponent />
      <footer style={{ backgroundColor: "green", marginBottom: "30px" }}>
        푸터
      </footer>
    </>
  );
}

export default App;
