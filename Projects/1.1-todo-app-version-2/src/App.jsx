import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./Apps.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "1/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "1/10/2023",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />

      <TodoItems todoItems={todoItems}/>

      
    </center>
  );
}

export default App;
