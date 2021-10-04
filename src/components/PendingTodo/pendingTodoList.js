import { useEffect } from "react";
import { useTodos, useTodosAction } from "../../provider/todoProvider";
import PendingTodo from "./pendingTodo";
import style from "./pendingTodoList.module.css";

const PendingTodoList = () => {
  const todos = useTodos();
  const todosDispatch = useTodosAction();
  return (
    <div className={style.todoList}>
      <h3 className={style.title}>PENDING</h3>
      {todos.pendingList &&
        todos.pendingList.map((t) => <PendingTodo key={t.id} todo={t} />)}
    </div>
  );
};

export default PendingTodoList;
