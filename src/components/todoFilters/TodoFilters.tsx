import { ITodoFiltersProps } from '../../types/todo-filter';
import './todo-filter.scss';

const TodoFilters:React.FC<ITodoFiltersProps> = (props) => {
  const {allTodos, onCompleted, onUnCompleted, onAllTodos} = props;

  return (
    <div className="todo-filter">
      <p className="todo-filter__amount">{allTodos} tasks left</p>
      <div className="todo-filter__buttons-wrap">
        <button 
          onClick={() => onAllTodos('all')}
          className="todo-filter__button"
        >All</button>
        <button 
          onClick={() => onCompleted('completed')}
          className="todo-filter__button"
        >Completed</button>
        <button 
          onClick={() => onUnCompleted('unCompleted')}
          className="todo-filter__button"
        >Uncomplited</button>
      </div>
    </div>
  );
}

export { TodoFilters };