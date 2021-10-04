import { useEffect, useState } from "react";
import { useTodos, useTodosAction } from "../../provider/todoProvider";
import Todo from "../Todo/todo";

const TodoList = () => {
  const todos = useTodos();
  const todosDispatch = useTodosAction();
  return (
    <div>
      {todos.updatedTodoList.length
        ? todos.updatedTodoList.map((t) => <Todo key={t.id} todo={t} />)
        : "no Item Added!"}
    </div>
  );
};

export default TodoList;
