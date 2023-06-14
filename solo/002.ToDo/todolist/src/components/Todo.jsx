import Card from "components/Card";

const Todo = ({ todoList, setTodoList, onRemoveHandler, onChangeHandler }) => {
  return (
    <div className="todo-container">
      <h1>Working</h1>
      <section className="todo-wrapper">
        {todoList.map((todo) => {
          return !todo.isDone ? (
            <Card
              key={todo.id}
              todo={todo}
              onRemoveHandler={onRemoveHandler}
              onChangeHandler={onChangeHandler}
            />
          ) : null;
        })}
      </section>
      <h1>Done</h1>
      <section className="todo-wrapper">
        {todoList.map((todo) => {
          return todo.isDone ? (
            <Card
              key={todo.id}
              todo={todo}
              onRemoveHandler={onRemoveHandler}
              onChangeHandler={onChangeHandler}
            />
          ) : null;
        })}
      </section>
    </div>
  );
};

export default Todo;
