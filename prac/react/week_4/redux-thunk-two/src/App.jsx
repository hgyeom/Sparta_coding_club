import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos } from "./redux/modules/todosSlice";

function App() {
  const dispatch = useDispatch();

  const { isLoading, error, todos } = useSelector((state) => state.todos);

  // GET
  useEffect(() => {
    dispatch(__getTodos());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      {todos.map((todo) => {
        return <div key={todo.id}>{todo.title}</div>;
      })}
    </>
  );
}

export default App;
