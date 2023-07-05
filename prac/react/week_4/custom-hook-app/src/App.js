import useInput from "./hooks/useInput";

function App() {
  //커스텀 훅
  const [name, onChangeNameHandler] = useInput("");
  const [password, onChangePasswordHandler] = useInput("");

  return (
    <div>
      <input type="text" value={name} onChange={onChangeNameHandler} />
      <input
        type="password"
        value={password}
        onChange={onChangePasswordHandler}
      />
    </div>
  );
}

export default App;
