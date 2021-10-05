import { useTodosAction } from "../../provider/todoProvider";
import style from "./pendingTodo.module.css";
import { FaCheck } from "react-icons/fa";
import { FaHourglassHalf } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import EditTodo from "./editTodo";


const PendingTodo = ({ todo }) => {
  const [isShow, setIsShow] = useState(false);
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
  const editTodoHandler = () => {
    setIsShow((prevState) => !prevState);
  };
  return (
    <div className={style.todoItem}>


      {isShow && <EditTodo todo={todo} />}
      <p>{todo.title}</p>
      <div className={style.todoItemBtnPart}>
        <button className={`${style.btn} ${style.deleteBtn}`}>
          <FaTrashAlt />
        </button>
        <button
          className={`${style.btn} ${style.editBtn}`}
          onClick={editTodoHandler}
        >
          <FaEdit />
        </button>
        <button
          onClick={pendingBtnHandler}
          className={`${style.btn} ${style.pendingBtn}`}
        >
          <FaHourglassHalf />
        </button>
        <button
          onClick={completedBtnHandler}
          className={`${style.btn} ${style.checkBtn}`}
        >
          <FaCheck />
        </button>
      </div>
    </div>
  );
};

export default PendingTodo;
