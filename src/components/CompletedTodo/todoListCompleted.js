import { useTodos, useTodosAction } from "../../provider/todoProvider";
import TodoCompleted from "./todoCompleted";
import style from "./todoListCompleted.module.css";

const TodoListCompleted = () => {
  const todos = useTodos();
  const todosDispatch = useTodosAction();
  console.log("completedList ", todos.completedList);
  return (
    <div className={style.todoList}>
      <h3 className={style.title}>COMPLETED</h3>
      {todos.completedList &&
        todos.completedList.map((t) => <TodoCompleted key={t.id} todo={t} />)}
    </div>
  );
};

export default TodoListCompleted;
