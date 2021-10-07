import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();
const TodoContextDispatcher = createContext();
const initialState = {
  todoList: [],
  updatedTodoList: [],
  pendingList: [],
  completedList: [],
};
const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const addTodo = state.updatedTodoList.concat(action.payload);

      return {
        ...state,
        updatedTodoList: addTodo,
        todoList: addTodo,
      };
    case "SEND_TO_COMPLETED_PART":
      const filterItemToggled = state.todoList.find(
        (t) => t.id === action.payload
      );
      const remainList = state.updatedTodoList.filter(
        (t) => t.id !== action.payload
      );
      filterItemToggled.category = {
        todo: false,
        completed: true,
        pending: false,
      };
      const updatedCompletedList =
        state.completedList.concat(filterItemToggled);

      return {
        ...state,
        updatedTodoList: remainList,
        completedList: updatedCompletedList,
      };
    case "SENDBACK_TO_TODO_PART":
      const filterCompletedListItem = state.completedList.find(
        (t) => t.id === action.payload
      );
      filterCompletedListItem.category = {
        todo: true,
        completed: false,
        pending: false,
      };
      const x = state.updatedTodoList.concat(filterCompletedListItem);
      const y = state.todoList.concat(filterCompletedListItem);
      const updateCompletedList = state.completedList.filter(
        (t) => t.id !== action.payload
      );
      return {
        ...state,
        todoList: y,
        updatedTodoList: x,
        completedList: updateCompletedList,
      };
    case "ADD_COMPLETED_TODO":
      const updateCompletedTodoList = state.completedList.concat(
        action.payload
      );

      return {
        ...state,
        completedList: updateCompletedTodoList,
      };
    case "SEND_TO_PENDING_PART": {
      const filterItemToggled = state.todoList.find(
        (t) => t.id === action.payload
      );
      const remainList = state.updatedTodoList.filter(
        (t) => t.id !== action.payload
      );
      filterItemToggled.category = {
        todo: false,
        completed: false,
        pending: true,
      };
      const updatedPendingList = state.pendingList.concat(filterItemToggled);

      return {
        ...state,
        updatedTodoList: remainList,
        pendingList: updatedPendingList,
      };
    }

    case "ADD_PENDING_TODO":
      const updatePendingList = state.pendingList.concat(action.payload);
      return {
        ...state,
        pendingList: updatePendingList,
      };
    case "SENDBACK_FROM_PENDING_TO_TODO": {
      const pendingItem = state.pendingList.find(
        (t) => t.id === action.payload
      );
      pendingItem.category = {
        todo: true,
        completed: false,
        pending: false,
      };
      const updatedTodoList = state.updatedTodoList.concat(pendingItem);
      const todoList = state.todoList.concat(pendingItem);
      const updatePendingList = state.pendingList.filter(
        (t) => t.id !== action.payload
      );
      return {
        ...state,
        todoList: todoList,
        updatedTodoList: updatedTodoList,
        pendingList: updatePendingList,
      };
    }
    case "SEND_FROM_PENDING_TO_Complete": {
      const pendingItem = state.pendingList.find(
        (t) => t.id === action.payload
      );
      pendingItem.category = {
        todo: false,
        completed: true,
        pending: false,
      };
      const updateCompletedList = state.completedList.concat(pendingItem);
      const updatePendingList = state.pendingList.filter(
        (t) => t.id !== action.payload
      );
      return {
        ...state,
        completedList: updateCompletedList,
        pendingList: updatePendingList,
      };
    }

    case "SEND_FROM_COMPLETED_TO_PENDING": {
      const completedItem = state.completedList.find(
        (t) => t.id === action.payload
      );
      completedItem.category = {
        todo: false,
        completed: false,
        pending: true,
      };
      const updatePendingList = state.pendingList.concat(completedItem);
      const updateCompletedList = state.completedList.filter(
        (t) => t.id !== action.payload
      );
      return {
        ...state,
        completedList: updateCompletedList,
        pendingList: updatePendingList,
      };
    }
    case "DELETE_FROM_TODOLIST":
      const newTodoList = state.updatedTodoList.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        updatedTodoList: newTodoList,
      };
    case "DELETE_FROM_COMPLETEDLIST":
      const newCompletedList = state.completedList.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        completedList: newCompletedList,
      };
    case "DELETE_FROM_PENDINGLIST": {
      const newPendingList = state.pendingList.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        pendingList: newPendingList,
      };
    }

    case "EDIT_TODOITEM":
      const index = state.updatedTodoList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      const selectedTodo = { ...state.updatedTodoList[index] };
      selectedTodo.title = action.payload.value;
      const updatedTodoList = [...state.updatedTodoList];
      updatedTodoList[index] = selectedTodo;
      return {
        ...state,
        updatedTodoList: updatedTodoList,
      };
    case "EDIT_PENDING_TODOITEM": {
      const index = state.pendingList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      const selectedTodo = { ...state.pendingList[index] };
      selectedTodo.title = action.payload.value;
      const updatedPendingList = [...state.pendingList];
      updatedPendingList[index] = selectedTodo;
      return {
        ...state,
        pendingList: updatedPendingList,
      };
    }
    case "EDIT_COMPLETED_TODOITEM": {
      const index = state.completedList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      const selectedTodo = { ...state.completedList[index] };
      selectedTodo.title = action.payload.value;
      const updatedCompletedList = [...state.completedList];
      updatedCompletedList[index] = selectedTodo;
      return {
        ...state,
        completedList: updatedCompletedList,
      };
    }
    default:
      return state;
  }
};

const TodoProvider = ({ children }) => {
  const [todos, todosDispatch] = useReducer(todosReducer, initialState);
  return (
    <>
      <TodoContext.Provider value={todos}>
        <TodoContextDispatcher.Provider value={todosDispatch}>
          {children}
        </TodoContextDispatcher.Provider>
      </TodoContext.Provider>
    </>
  );
};

export default TodoProvider;
export const useTodos = () => useContext(TodoContext);
export const useTodosAction = () => useContext(TodoContextDispatcher);
