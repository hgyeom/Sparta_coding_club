const Card = ({ todo, setTodoList, todoList }) => {
  const onRemoveClickHandler = (id) => {
    const filterdTodo = todoList.filter((todo) => todo.id !== id);
    setTodoList(filterdTodo);
  };

  const onCompleteClickHandler = (id) => {
    const changeTodo = todoList.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
        return todo;
      } else {
        return todo;
      }
    });
    setTodoList([...changeTodo]);
  };

  return (
    <div className="card">
      <h3>{todo.title}</h3>
      <p>{todo.body}</p>
      <div className="card-button">
        <button onClick={() => onRemoveClickHandler(todo.id)}>삭제</button>
        <button onClick={() => onCompleteClickHandler(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default Card;
