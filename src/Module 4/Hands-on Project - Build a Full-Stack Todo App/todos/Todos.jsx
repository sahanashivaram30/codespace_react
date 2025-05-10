import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './todosSlice';

const Todos = () => {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim() !== '') {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => dispatch(removeTodo(index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
