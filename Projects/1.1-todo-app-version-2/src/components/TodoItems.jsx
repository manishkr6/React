import style from "./TodoItems.module.css"
import TodoItem from './TodoItem'

const TodoItems = ({todoItems}) => {
    return <>
    <div className={style.itemsContainer}>
        {todoItems.map(itme => <TodoItem todoDate={itme.dueDate} todoName={itme.name} />)}
      </div>
    </>
}

export default TodoItems