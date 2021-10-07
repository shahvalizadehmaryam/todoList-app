import { useTodos, useTodosAction } from "../../../provider/todoProvider";
import TodoCompleted from "../Todo/todoCompleted";
import style from "./todoListCompleted.module.css";

const TodoListCompleted = () => {
  const todos = useTodos();
  const todosDispatch = useTodosAction();
  return (
    <div className={style.todoList}>
      <h3 className={style.title}>COMPLETED</h3>
      {todos.completedList.length
        ? todos.completedList.map((t) => <TodoCompleted key={t.id} todo={t} />)
        : "No Item Add Yet!"}
    </div>
  );
};

export default TodoListCompleted;
