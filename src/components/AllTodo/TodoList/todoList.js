import { useTodos } from "../../../provider/todoProvider";
import Todo from "../Todo/todo";
import style from "./todoList.module.css";

const TodoList = () => {
  const todos = useTodos();
  return (
    <div className={style.todoList}>
      <h3 className={style.title}>TODO</h3>
      {todos.updatedTodoList.length
        ? todos.updatedTodoList.map((t) => <Todo key={t.id} todo={t} />)
        : "No Item Add Yet!"}
    </div>
  );
};

export default TodoList;
