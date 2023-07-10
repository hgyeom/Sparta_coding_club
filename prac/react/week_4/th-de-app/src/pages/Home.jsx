import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let timerId = null;
  const [state, setState] = useState(true);
  const navigate = useNavigate();

  // 메모리 누수 방지, 언마운트 시
  useEffect(() => {
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, []);

  const throttle = (delay) => {
    if (timerId) {
      return;
    }
    setState(!state);
    console.log(`API 실행 - ${delay}ms동안 추가 요청 받지 않습니다`);
    timerId = setTimeout(() => {
      console.log(`${delay}ms가 지나 추가 요청 받습니다.`);
      timerId = null;
    }, delay);
  };

  // 반복적으로 이벤트 발생 시 마지막 이벤트 이후 delay가 지나면 fuction
  const debounce = (delay) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      console.log(`마지막 요청으로부터 ${delay}ms가 경과하여 실행되었습니다.`);
      timerId = null;
    }, delay);
  };

  return (
    <div style={{ paddingLeft: 20, paddingRight: 20 }}>
      <h1>Button 이벤트 예제</h1>
      <button onClick={() => throttle(2000)}>스로틀링 버튼</button>
      <button onClick={() => debounce(2000)}>디바운싱 버튼</button>

      <div>
        <button onClick={() => navigate("company")}>페이지 이동</button>
      </div>
    </div>
  );
}

export default Home;
