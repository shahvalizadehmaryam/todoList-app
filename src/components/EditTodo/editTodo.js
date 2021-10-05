import { useState } from "react";
import { useTodos, useTodosAction } from "../../provider/todoProvider";
import style from "./editTodo.module.css";

const EditTodo = ({ todo }) => {
  const todos = useTodos();
  const todosDispatch = useTodosAction();
  const [inputVal, setInputVal] = useState(todo.title);
  const todoChangeHandler = (e) => {
    setInputVal(e.target.value);
  };
  const editSubmitHandler = (e) => {
    e.preventDefault();
    todosDispatch({
      type: "EDIT_TODOITEM",
      payload: { id: todo.id, value: inputVal },
    });
  };
  return (
    <>
      <form onSubmit={editSubmitHandler} className={style.form}>
        <input type="text" onChange={todoChangeHandler} value={inputVal} />
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default EditTodo;
