import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../shared/Data";

function Wokr() {
  const params = useParams();

  // todo 찾기
  const foundData = data.find((item) => {
    return item.id === parseInt(params.id);
  });
  return (
    <div>
      <h3>{foundData.id}</h3>
      <p>{foundData.todo}</p>
    </div>
  );
}

export default Wokr;
