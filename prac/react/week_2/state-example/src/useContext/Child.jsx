import React, { useContext } from "react";
import { FamilyContext } from "../context/FamilyContext";

const style = {
  color: "red",
  fontWeight: "900",
};

function Child() {
  const { houseName, pocketMoney } = useContext(FamilyContext);
  return (
    <div>
      저는 이 집안의 막내에요! <br />
      할아버지가 우리 집 이름은 <span style={style}>{houseName}</span>라고
      하셨어요!
      <br />
      거기에 용돈도 <span style={style}>{pocketMoney}</span>원이나 주셨어요!
    </div>
  );
}

export default Child;
