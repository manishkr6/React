import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem2 from "./components/TodoItem2";
import TodoItem from "./components/TodoItem";

import "./Apps.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem todoDate="23/11/2024" todoName="Paneer"/>
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
