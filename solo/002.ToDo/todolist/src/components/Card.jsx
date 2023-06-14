const Card = ({ todo, onRemoveHandler, onChangeHandler }) => {
  return (
    <div className="card">
      <h3>{todo.title}</h3>
      <p>{todo.body}</p>
      <div className="card-button">
        <button onClick={() => onRemoveHandler(todo.id)}>삭제</button>
        <button onClick={() => onChangeHandler(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default Card;
