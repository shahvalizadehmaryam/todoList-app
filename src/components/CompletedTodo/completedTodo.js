import { useEffect, useState } from "react";
import { useTodos, useTodosAction } from "../../provider/todoProvider";
import TodoListCompleted from "./todoListCompleted";
import style from "./completedTodo.module.css";

const CompletedTodo = () => {
  const todos = useTodos();
  const todosDispatch = useTodosAction();
  console.log(todos, "completedtodo.js");
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    category: {
      todo: true,
      completed: false,
      pending: false,
    },
  });
  const completedTodoChangeHandler = (e) => {
    setTodo({
      ...todo,
      id: Math.floor(Math.random() * 1000),
      title: e.target.value,
    });
  };
  const completedTodoSubmitHandler = (e) => {
    e.preventDefault();
    todosDispatch({ type: "ADD_COMPLETED_TODO", payload: todo });
    setTodo({
      ...todo,
      id: 0,
      title: "",
    });
  };
  return (
    <div>
      <h3>Completed Todo</h3>
      <form onSubmit={completedTodoSubmitHandler} className={style.form}>
        <input
          type="text"
          placeholder="Add New Todo"
          required
          onChange={completedTodoChangeHandler}
          value={todo.title}
        />
        <button type="submit">Add</button>
      </form>
      <TodoListCompleted />
    </div>
  );
};

export default CompletedTodo;
