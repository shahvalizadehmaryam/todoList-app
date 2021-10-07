import { useState } from "react";
import { useTodos, useTodosAction } from "../../provider/todoProvider";
import PendingTodoList from "./TodoList/pendingTodoList";
import style from "./pending.module.css";

const Pending = () => {
  const todos = useTodos();
  const todosDispatch = useTodosAction();
  console.log(todos, "completedtodo.js");
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    category: {
      todo: false,
      completed: false,
      pending: true,
    },
  });
  const pendingTodoChangeHandler = (e) => {
    setTodo({
      ...todo,
      id: Math.floor(Math.random() * 1000),
      title: e.target.value,
    });
  };
  const pendingTodoSubmitHandler = (e) => {
    e.preventDefault();
    todosDispatch({ type: "ADD_PENDING_TODO", payload: todo });
    setTodo({
      ...todo,
      id: 0,
      title: "",
    });
  };
  return (
    <div className={style.formPart}>
      <h3>pending Todo</h3>
      <form onSubmit={pendingTodoSubmitHandler} className={style.form}>
        <input
          type="text"
          placeholder="Add New Todo"
          value={todo.title}
          onChange={pendingTodoChangeHandler}
        />
        <button>Add</button>
      </form>
      <PendingTodoList />
    </div>
  );
};

export default Pending;
