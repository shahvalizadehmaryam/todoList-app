import { useTodos, useTodosAction } from "../../provider/todoProvider";
import style from "./todoCompleted.module.css";

const TodoCompleted = ({ todo }) => {
  const todos = useTodos();
  const todosDispatch = useTodosAction();
  const completedBtnHandler = () => {
    todosDispatch({ type: "SENDBACK_TO_TODO_PART", payload: todo.id });
  };
  const pendingBtnHandler = () => {
    todosDispatch({ type: "SEND_FROM_COMPLETED_TO_PENDING", payload: todo.id });
  };
  return (
    <div>
   
      <p>{todo.title}</p>
      <button onClick={pendingBtnHandler}>Pending</button>
      <button onClick={completedBtnHandler}>UnCompleted</button>
    </div>
  );
};

export default TodoCompleted;
