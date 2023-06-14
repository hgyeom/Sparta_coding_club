import Card from "components/Card";

const Todo = ({ todoList, setTodoList }) => {
  return (
    <div className="todo-container">
      <h1>Working</h1>
      <section className="todo-wrapper">
        {todoList.map((todo) => {
          return !todo.isDone ? (
            <Card
              key={todo.id}
              todo={todo}
              setTodoList={setTodoList}
              todoList={todoList}
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
              setTodoList={setTodoList}
              todoList={todoList}
            />
          ) : null;
        })}
      </section>
    </div>
  );
};

export default Todo;
