import React from "react";
import Father from "./Father";
import { FamilyContext } from "../context/FamilyContext";

// Child에게 props를 보내서 Child가 그 porps를 출력하게 한다.
function GrandFather() {
  const props = {
    houseName: "스파르타",
    pocketMoney: 10000,
  };
  return (
    <FamilyContext.Provider value={props}>
      <Father />
    </FamilyContext.Provider>
  );
  // <Father houseName={houseName} pocketMoney={pocketMoney} />;
}

export default GrandFather;
