import React, { useState } from 'react';


function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [checked, setChecked] = useState('');

  const [checkedState, setCheckedState] = useState(
    new Array(todos.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    setTodos([...todos, inputValue]);
    setChecked(false);
    setInputValue('');
  };

  const handleChange = (index) => {
    const newTodos = [...todos];
    if (index.target.checked) {
        setChecked(true);
    } else{
        setChecked(false);
    }
    setTodos(newTodos, checked);
    
  };

  const handleTodoDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add </button>
      </form>
    
      {todos.map((todo, index) => (
        <div key={index}>
          <input
            id={`todolist-${index}`}
            type="checkbox"
            checked={checkedState[index]}
            onChange={() => handleOnChange(index)}
          />
          <span>{todo}{' '}</span>
          <button onClick={() => handleTodoDelete(index)}>Delete</button>
        </div>
      ))}

    </div>
  );
}

export default TodoList;