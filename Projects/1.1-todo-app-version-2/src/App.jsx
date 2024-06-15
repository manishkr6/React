import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

import "./Apps.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem todoDate="23/11/2024" todoName="Paneer"/>
        <TodoItem todoDate="12/02/2024" todoName="Go to College"/>
      </div>
    </center>
  );
}

export default App;
