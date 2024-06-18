import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState, useEffect } from "react";
import "./Apps.css";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItems = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName)
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />

      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}

      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItems} />
    </center>
  );
}

export default App;
