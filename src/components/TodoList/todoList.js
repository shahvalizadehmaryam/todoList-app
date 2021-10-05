
import { useTodos, useTodosAction } from "../../provider/todoProvider";
import Todo from "../Todo/todo";
import style from "./todoList.module.css";

const TodoList = () => {
  const todos = useTodos();
  const todosDispatch = useTodosAction();
  return (
    <div className={style.todoList}>
      <h3 className={style.title}>TODO</h3>
      {todos.updatedTodoList &&
        todos.updatedTodoList.map((t) => <Todo key={t.id} todo={t} />)}
    </div>
  );
};

export default TodoList;
