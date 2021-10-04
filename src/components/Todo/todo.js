import { useTodos, useTodosAction } from "../../provider/todoProvider";
import style from "./todo.module.css";

const Todo = ({ todo }) => {
  const todos = useTodos();
  const todosDispatch = useTodosAction();
  const sendToCompletedPart = () => {
    todosDispatch({ type: "SEND_TO_COMPLETED_PART", payload: todo.id });
  };
  // const sendToPendingPart = () => {
  //   todosDispatch({ type: "SEND_TO_PENDING_PART", payload: todo.id });
  // }
  return (
    <div className={style.todoItem}>
      <p>{todo.title}</p>
      <button onClick={sendToCompletedPart}>completed</button>
      {/* <button onClick={sendToPendingPart}>pending</button> */}
    </div>
  );
};

export default Todo;
