import TodoProvider, { useTodos } from "../../provider/todoProvider";
import AllTodo from "../AllTodo/allTodo";
import CompletedTodo from "../CompletedTodo/completedTodo";
// import Pending from "../PendingTodo/pending";

const TodoApp = () => {
  return (
    <div>
      <TodoProvider>
        <AllTodo />
        {/* <Pending /> */}
        <CompletedTodo />
      </TodoProvider>
    </div>
  );
};

export default TodoApp;
