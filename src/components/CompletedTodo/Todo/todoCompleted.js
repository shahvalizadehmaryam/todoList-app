import { useTodos, useTodosAction } from "../../../provider/todoProvider";
import style from "./todoCompleted.module.css";
import { FaCheck } from "react-icons/fa";
import { FaHourglassHalf } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import EditTodo from "../EditTodo/editTodo";

const TodoCompleted = ({ todo }) => {
  const [isShow, setIsShow] = useState(false);
  const todos = useTodos();
  const todosDispatch = useTodosAction();
  const completedBtnHandler = () => {
    todosDispatch({ type: "SENDBACK_TO_TODO_PART", payload: todo.id });
  };
  const pendingBtnHandler = () => {
    todosDispatch({ type: "SEND_FROM_COMPLETED_TO_PENDING", payload: todo.id });
  };
  const deleteTodoHandler = () => {
    todosDispatch({ type: "DELETE_FROM_COMPLETEDLIST", payload: todo.id });
  };
  const editTodoHandler = () => {
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

export default TodoCompleted;
