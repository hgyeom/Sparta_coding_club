import React from "react";
import { useState } from "react";
import { useEffect, useRef } from "react";

function App() {
  // focus()함수를 위해 dom에 접근하기 위해 사용
  const idRef = useRef("");
  const pwRef = useRef("");

  const [id, setId] = useState("");

  // 화면이 렌더링 될 때 작업 시행 > useEffect
  // 한번만 실행시키기 위해 의존성 배열을 비운다.
  useEffect(() => {
    idRef.current.focus();
  }, []);

  useEffect(() => {
    if (id.length === 10) pwRef.current.focus();
  }, [id]);

  return (
    <>
      <div>
        {/* ref는 useRef로 dom에 접근하기 위해 사용한다. */}
        아이디 :{" "}
        <input
          type="text"
          ref={idRef}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
      </div>
      <div>
        비밀번호 : <input type="password" ref={pwRef} />
      </div>
    </>
  );
}

export default App;
