import { useState, useEffect, useRef } from 'react';

import { AddPanelProps } from '../../types/add-panel';

import './add-panel.scss';

const AddPanel: React.FC<AddPanelProps> = (props) => {
  const [value, setValue] = useState('');
  const { onTodoAdd, onCompleteAll, onClearCompleted } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') addTodo();
  }

  const addTodo = () => {
    if(value) {
      onTodoAdd({
        id: Date.now(),
        title: value,
        complete: false
      });
      setValue('');
    }
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, []);

  return (
    <div className='add-panel'>
      <div className='add-panel__wrap'>
        <input 
          type="text" 
          value={value}
          placeholder="What do you need to do?"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          className='add-panel__input'/>
        <button onClick={addTodo} className='add-panel__button'></button>
      </div>
      <div className="add-panel__filters">
        <button 
          className="add-panel__action add-panel__action--complete"
          onClick={onCompleteAll}>
            Complete all tasks
        </button>
        <button 
          className="add-panel__action add-panel__action--clear"
          onClick={onClearCompleted}>
            Clear completed
        </button>
      </div>
    </div>
  );
}

export { AddPanel };