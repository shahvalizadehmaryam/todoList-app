import TodoProvider, { useTodos } from "../../provider/todoProvider";
import AllTodo from "../AllTodo/allTodo";
import CompletedTodo from "../CompletedTodo/completedTodo";
// import Pending from "../PendingTodo/pending";
import style from "./todoApp.module.css";

const TodoApp = () => {
  return (
    <div className={style.main}>
      <TodoProvider>
        <AllTodo />
        {/* <Pending /> */}
        <CompletedTodo />
      </TodoProvider>
    </div>
  );
};

export default TodoApp;
