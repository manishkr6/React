import style from "./TodoItems.module.css";
import TodoItem from "./TodoItem";

import {TodoItemsContext} from "../store/todo-items-store"
import { useContext } from "react"

const TodoItems = () => {
  const {todoItems} = useContext(TodoItemsContext)

  return (
    <>
      <div className={style.itemsContainer}>
        {todoItems.map((itme) => (
          <TodoItem
          key={itme.name}
            todoDate={itme.dueDate}
            todoName={itme.name}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;