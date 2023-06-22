import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    setTodos([...todos, inputValue]);
    setInputValue('');
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
        <div>
            <input id="todoList1" type="checkbox" value={inputValue} onChange={handleInputChange} />
            <label htmlFor='todoList1'>todo-1</label> 
        </div>
        <div>
            <input id="todoList2" type="checkbox" value={inputValue} onChange={handleInputChange} />
            <label htmlFor='todoList2'>todo-1</label> 
        </div>
        <div><button type="submit">Add</button></div>

      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{' '}
            <button onClick={() => handleTodoDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;