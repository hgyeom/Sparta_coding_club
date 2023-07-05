import api from "./axios/api";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState(null);
  const [inputValue, setInputValue] = useState({
    // json은 기본적으로 id값을 자동으로 할당해준다.
    title: "",
  });
  const [targetId, setTargetId] = useState("");
  const [contents, setContents] = useState("");

  // 서버와 통신하기 위해 비동기 함수를 사용한다.

  // 추가
  const onSubmitHandler = async () => {
    await api.post(`/todos`, inputValue);
    fetchTodos();
  };

  // 조회
  const fetchTodos = async () => {
    const { data } = await api.get(`/todos`);
    setTodos(data);
  };

  // 수정
  const onUndateButtonClickHandler = async () => {
    api.patch(`/todos/${targetId}`, {
      title: contents,
    });
    setTodos(
      todos.map((todo) => {
        if (todo.id == targetId) {
          return { ...todo, title: contents };
        } else {
          return todo;
        }
      })
    );
  };

  // 삭제
  const onDeleteButtonClickHandler = async (id) => {
    api.delete(`/todos/${id}`);
    setTodos(todos.filter((item) => item.id !== id));
  };

  useEffect(() => {
    // json-server에서 데이터 가져오기
    fetchTodos();
  }, []);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="ID"
          value={targetId}
          onChange={(e) => setTargetId(e.target.value)}
        />
        <input
          type="text"
          placeholder="내용"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
        <button onClick={onUndateButtonClickHandler}>수정</button>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitHandler();
          }}
        >
          <input
            type="text"
            value={inputValue.title}
            onChange={(e) => {
              setInputValue({ title: e.target.value });
            }}
          />
          <button>추가하기</button>
        </form>
      </div>
      <div>
        {todos?.map((todo) => {
          return (
            <div key={todo.id}>
              {todo.id} : {todo.title}
              &nbsp;{" "}
              <button onClick={() => onDeleteButtonClickHandler(todo.id)}>
                삭제
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
