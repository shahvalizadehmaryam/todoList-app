import { useState } from "react";
import { useTodos, useTodosAction } from "../../provider/todoProvider";
import TodoList from "../TodoList/todoList";
import style from "./allTodo.module.css";

const AllTodo = () => {
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    category: {
      todo: true,
      completed: false,
      pending: false,
    },
  });
  const todos = useTodos();
  const todosDispatch = useTodosAction();
  const todoChangeHandler = (e) => {
    setTodo({
      ...todo,
      id: Math.floor(Math.random() * 1000),
      title: e.target.value,
    });
  };
  const allTodoSubmitHandler = (e) => {
    e.preventDefault();
    todosDispatch({ type: "ADD_TODO", payload: todo });
    setTodo({
      ...todo,
      id: 0,
      title: "",
    });
  };
  return (
    <div className={style.formPart}>
      <h3>All Todo</h3>
      <form onSubmit={allTodoSubmitHandler} className={style.form}>
        <input
          type="text"
          placeholder="Add New Todo"
          onChange={todoChangeHandler}
          value={todo.title}
          required
        />
        <button type="submit">Add</button>
      </form>
      <TodoList />
    </div>
  );
};

export default AllTodo;
