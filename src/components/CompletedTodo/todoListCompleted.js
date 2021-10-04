import { useTodos, useTodosAction } from "../../provider/todoProvider";
import TodoCompleted from "./todoCompleted";

const TodoListCompleted = () => {
  const todos = useTodos();
  const todosDispatch = useTodosAction();
  console.log("completedList ", todos.completedList);
  return (
    <div>
      {todos.completedList.length
        ? todos.completedList.map((t) => <TodoCompleted key={t.id} todo={t} />)
        : "no item added!"}
    </div>
  );
};

export default TodoListCompleted;
