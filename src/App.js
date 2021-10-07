import "./App.css";
import TodoApp from "./components/TodoApp/todoApp";
import Header from "./components/Header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoApp />
    </div>
  );
}

export default App;
