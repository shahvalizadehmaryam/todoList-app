import { useTodosAction } from "../../provider/todoProvider";
import style from "./pendingTodo.module.css";

const PendingTodo = ({ todo }) => {
  const todosDispatch = useTodosAction();
  const pendingBtnHandler = () => {
    todosDispatch({ type: "SENDBACK_FROM_PENDING_TO_TODO", payload: todo.id });
  };
  const completedBtnHandler = () => {
    todosDispatch({
      type: "SEND_FROM_PENDING_TO_Complete",
      payload: todo.id,
    });
  };
  return (
    <div className={style.todoItem}>
      <p>{todo.title}</p>
      <button onClick={pendingBtnHandler}>unPending</button>
      <button onClick={completedBtnHandler}>completed</button>
    </div>
  );
};

export default PendingTodo;
