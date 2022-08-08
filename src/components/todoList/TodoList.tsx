import { TodoItem } from "../todoItem/TodoItem";
import { ITodoListProps } from '../../types/todo-list'
import './todo-list.scss'

const TodoList: React.FC<ITodoListProps> = (props) => {
  const {items, toggleTodo, removeTodo, onChangeTodos} = props;

  return (
    <div className={items.length ? 'todo-list' : undefined}>
      {
        items.map(todo => (
          <TodoItem 
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
            onChangeTodos={(value, id) => onChangeTodos(value, id)}/>
        ))
      }
    </div>
  )
}

export { TodoList };