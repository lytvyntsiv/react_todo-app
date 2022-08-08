import { useState } from 'react';

import { TodoList } from './components/todoList/TodoList';
import { AddPanel } from './components/AddPanel/AddPanel';
import { TodoFilters } from './components/todoFilters/TodoFilters';
import { ITodo } from './types/data';

import './App.scss';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState('all');

  const removeTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const onTodoAdd = (data: ITodo): void => {
    setTodos([...todos, data]);
  }

  const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) {
        return todo;
      } else {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
    }))
  }

  const onCompleteAll = (): void => {
    if (!todos.every(todo => todo.complete)) {
      setTodos(todos.map(todo => {
        if (!todo.complete) {
          return {
            ...todo,
            complete: !todo.complete
          };
        }
        return todo;
      }))
    } else {
      setTodos(todos.map(todo => {
        if (todo.complete) {
          return {
            ...todo,
            complete: false
          };
        }
        return todo;
      }))
    }
  }

  const onClearCompleted = (): void => {
    const clearedTodos: ITodo[] = [];
    todos.forEach(item => {
      if (!item.complete) {
        clearedTodos.push(item);
      }
    })

    setTodos(clearedTodos);
  }

  const onChangeTodos = (value: string, id: number): void => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;

      return {
        ...todo,
        title: value
      }
    }))
  }

  const onFilter = (filterType: string) => {
    setFilter(filterType);
    viewOfTheFilter();
  }

  const viewOfTheFilter = (): ITodo[] => {
    switch (filter) {
      case 'all': 
        return todos;
      case 'completed': 
        return todos.filter(todo => todo.complete);
      case 'unCompleted': 
        return todos.filter(todo => !todo.complete);
      default:
        throw new Error();
    }
  }

  return (
    <div className='app'>
      <AddPanel 
        onTodoAdd={onTodoAdd}
        onCompleteAll={onCompleteAll}
        onClearCompleted={onClearCompleted}
      />
      <TodoList 
        items={viewOfTheFilter()}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        onChangeTodos={onChangeTodos}/>
      <TodoFilters 
        allTodos={todos.length}
        onAllTodos={(filterType) => onFilter(filterType)}
        onCompleted={(filterType) => onFilter(filterType)}
        onUnCompleted={(filterType) => onFilter(filterType)}/>
    </div>
  );
}

export {App};