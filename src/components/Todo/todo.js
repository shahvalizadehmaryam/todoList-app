import { useTodos, useTodosAction } from "../../provider/todoProvider";
import style from "./todo.module.css";
import { FaCheck } from "react-icons/fa";
import { FaHourglassHalf } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import EditTodo from "../EditTodo/editTodo";

const Todo = ({ todo }) => {
  const [isShow, setIsShow] = useState(false);
  const todos = useTodos();
  const todosDispatch = useTodosAction();
  const sendToCompletedPart = () => {
    todosDispatch({ type: "SEND_TO_COMPLETED_PART", payload: todo.id });
  };
  const sendToPendingPart = () => {
    todosDispatch({ type: "SEND_TO_PENDING_PART", payload: todo.id });
  };
  const deleteTodoHandler = () => {
    todosDispatch({ type: "DELETE_FROM_TODOLIST", payload: todo.id });
  };
  const editTodoHandler = () => {
    console.log("item clicked", todo.id);
    setIsShow((prevState) => !prevState);
  };

  return (
    <div className={style.todoItem}>
      {isShow && <EditTodo todo={todo} />}

      <p>{todo.title}</p>
      <div className={style.todoItemBtnPart}>
        <button
          className={`${style.btn} ${style.deleteBtn}`}
          onClick={deleteTodoHandler}
        >
          <FaTrashAlt />
        </button>
        <button
          className={`${style.btn} ${style.editBtn}`}
          onClick={editTodoHandler}
        >
          <FaEdit />
        </button>

        <button
          onClick={sendToPendingPart}
          className={`${style.btn} ${style.pendingBtn}`}
        >
          <FaHourglassHalf />
        </button>
        <button
          onClick={sendToCompletedPart}
          className={`${style.btn} ${style.checkBtn}`}
        >
          <FaCheck />
        </button>
      </div>
    </div>
  );
};

export default Todo;
