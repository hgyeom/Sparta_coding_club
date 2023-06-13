import "App.css";
import { useState } from "react";

function App() {
  // hook
  // useState("초기값");
  // --> 배열로 리턴한다. [state(변수), setState(state를 변경 가능한 메서드)]
  // const [state, setState] = useState("스테이트");
  // const [todoList, setTodoList] = useState([]);

  // useState와 같이 리액트에서만 제공하는 특정한 기능을
  // 리액트에서는 hook이라고 한다.
  // const [count, setCount] = useState(0);

  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const onIdChangeHandler = (e) => {
    setId(e.target.value);
  };

  const onPwdChangeHandler = (e) => {
    setPwd(e.target.value);
  };

  const onLoginClick = () => {
    if (id === "" || pwd === "") {
      alert("아이디 또는 비밀번호를 입력해 주세요.");
    } else {
      alert(
        `고객님이 입력하신 아이디는 '${id}'이며 비밀번호는 '${pwd}'입니다.`
      );
      setId("");
      setPwd("");
    }
  };
  return (
    <div>
      아이디 :
      <input type="text" value={id} onChange={onIdChangeHandler} />
      <br />
      비밀번호 :
      <input type="password" value={pwd} onChange={onPwdChangeHandler} />
      <br />
      <button onClick={onLoginClick}>로그인</button>
    </div>
  );
}

export default App;
