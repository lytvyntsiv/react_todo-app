import { ITodoItem } from '../../types/todo-item';
import './todo-item.scss';

const TodoItem: React.FC<ITodoItem> = (props) => {
  const {id, title, complete, removeTodo, toggleTodo, onChangeTodos} = props;

  const onChahgeValue = (value: string): void => {
    onChangeTodos(value, id);
  }
 
  return (
    <div className='todo-item'>
      <div className="todo-item__checkbox">
        <input 
          type="checkbox" 
          checked={complete} 
          className="todo-item__input"
          id={`check${id}`}
          onChange={() => toggleTodo(id)}/>
        <label className="todo-item__label" htmlFor={`check${id}`}>
          <input 
            type="text" 
            value={title}
            onChange={(e) => onChahgeValue(e.target.value)}
            className="todo-item__text" />
        </label>
      </div>
      <button 
        onClick={() => removeTodo(id)}
        className="todo-item__button"
      ></button>
    </div>
  )
}

export { TodoItem };