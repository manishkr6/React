import style from "./TodoItems.module.css";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div className={style.itemsContainer}>
        {todoItems.map((itme) => (
          <TodoItem
          key={itme.name}
            todoDate={itme.dueDate}
            todoName={itme.name}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
